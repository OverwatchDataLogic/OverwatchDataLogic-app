# OWL API

[TOC]

## 基础

根 URL：`https://api.overwatchleague.com/` (国内：[`https://api.overwatchleague.cn/`])

本地化：大多接口都可以加上 locale 参数，例如：

`GET /schedule?locale=zh-cn`

## 登陆

获取登陆页面：

`GET /login`

回调：

`GET /auth/bnet/callback?code={code}`

## 用户 (需要登陆)

用户信息

`GET /user`

关注的战队

`GET /user/favorites`

关注战队

`POST /user/favorites`

```json
{
  "id": "4525",
  "tags": ["owl"],
  "franchise": "overwatch"
}
```

改变关注顺序

`POST /user/favorites/order`

```json
{
  "ids": ["4525"]
}
```

取关战队

`DELETE /user/favorites/{id}`

## 队伍

所有队伍：

`GET /teams`

某支队伍：

`GET /teams/{id}`

## 排名

`GET /ranking`

## 比赛

所有比赛：

`GET /matches`

某场比赛：

`GET /matches/{id}`

比赛安排：

`GET /schedule`

## 直播

当前似乎只会返回一个直播 (MLG 季前赛)。

`GET /streams`

## 录像

`GET /vods?per_page=50&page=1`

## 其他赛季排名

包括了具体的赛季排名，包括赛程，阶段，队伍，排名等。

`GET /standings`

## 地图

`GET /maps`

## 新闻

`GET /news?pageSize=15&page=1`

## 视频

`GET /playlist/owl-app-playlist?per_page=15&page=1`

## 关于

`GET /about`

## 彩蛋

`GET /`

```json
{
  "the world": "could always use more heroes"
}
```

> 来源：http://bbs.nga.cn/read.php?&tid=13218083
