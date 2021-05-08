# README Frontend(サーバーサイドレンダリング)

### Backend
Backend( [github]:https://github.com/tadashimasuda/eshiritori_backend )

## 作った理由
   - Twitterカード（OGP）を使ったサービスを開発したかったため。
   - 個人的にも使ってみたい技術が存在したため（Twitter連携、お絵かき機能Canvas).

## アプリ概要
   ツイッター上で絵しりとりができるサービス
1. ツイートで指定されたユーザーはアプリにアクセス
2. NuxtからLaravelのAPIを実行
3. AWS S3への投稿（描画された絵）された画像の保存
4. Twitter API(OAuth)によってユーザー情報の取得（Laravel Socialite)
5. Twitter APIからユーザーのフォロワー取得
6. 設置済みのツイートリンクからツイート

![eshiritori](https://user-images.githubusercontent.com/51233312/117447425-7b082600-af78-11eb-8969-79dfd9b8b9e5.png)

## 機能
- ログイン機能
- 新規登録機能
- ユーザー情報編集機能
- ユーザー詳細（プロフィール、投稿した絵、主催したテーブル）
- ユーザー一覧（画家一覧）
- テーブル作成機能
- テーブル閉鎖機能（編集）
- テーブル一覧
- テーブル詳細
- 絵コンテンツ投稿機能

## 注力した点
- Vuexを用いた状態管理
- Vuexのリロード対策
    - 状態管理Vuexはリロードしてしまうと保持していたユーザー情報などのデータが消えてしまうことにクッキーにtokenを保存し、消えても取得できるようにした。
- Twitterログイン
    - リダイレクトURLをLaravelから受け取り、ユーザーを遷移し、認証を行ってもらい、oauth_verifierなどの情報をLaravelに送信してユーザーの作成、ログインを行った。また、Laravel PassportのAccess_tokenを用いて認証を行った。
- 画像のエンコード
    - 画像データをBase64 エンコードして文字列化することで送信した。
## 使用した言語、技術、サービス
- 言語
    - Frontend : Nuxt.js
    - Backend : Laravel

- DB
    - Mysql

- 技術
    - 認証周り
        Laravel Socialite,Passport
    
    - Cors
        laravel-cors
    
    - フォロワー取得
        abraham/twitteroauth(Twitter API)

- サービス
    - ストレージサービス
        AWS S3
        
## 実装予定
- いいね機能、お気に入り機能、通知機能
