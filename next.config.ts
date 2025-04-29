import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const withMDX = createMDX({})

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    // 既存のSVG処理ルールを探す
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      // 既存のルールを?urlクエリ付きのSVGに適用
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // その他のSVGをReactコンポーネントに変換
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // ?urlがない場合
        use: [{
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: { removeViewBox: false },
                  },
                },
              ],
            },
          },
        }],
      },
    )

    // SVGは既に処理されているので、ファイルローダーのルールから除外
    fileLoaderRule.exclude = /\.svg$/i

    return config;
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);
