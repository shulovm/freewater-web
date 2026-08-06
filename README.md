# Free Water Website

Free Water 公式サイト（レビュー用／成長中）。

ローカルでは `seiri-ai-frontend` と並列に配置します（入れ子にしない）。

```text
~/seiri-ai-frontend/
~/freewater-web/
```

## 開発

```bash
cd ~/freewater-web
npm install
npm run dev
```

## デプロイ

Vercel + GitHub。`main` への push でプレビュー／本番デプロイが更新されます。
レビューURL: https://freewater-web.vercel.app  
将来の独自ドメインは Vercel Project Settings → Domains で追加します。
