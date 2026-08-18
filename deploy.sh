#!/usr/bin/env bash
# 一键部署主页:提交所有改动 → 推送到 GitHub → Actions 自动构建并部署到两个站点
# 用法:
#   ./deploy.sh                # 默认提交信息
#   ./deploy.sh "改了xxx"       # 自定义提交信息
set -e
cd "$(dirname "$0")"

msg="${1:-update: $(date '+%F %T')}"

git add -A
if git diff --cached --quiet; then
  echo "没有改动,跳过提交"
else
  git commit -m "$msg"
fi

echo "推送中..."
if ! timeout 60 git push origin main; then
  echo "代理通道失败,改用直连重试..."
  timeout 60 git -c http.proxy= -c https.proxy= push origin main
fi

echo "✅ 已推送,几分钟后生效:"
echo "   https://zikunyao.github.io/yaozikun.github.io/"
echo "   https://yaozikun.top/"
