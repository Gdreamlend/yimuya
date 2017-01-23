<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class WechatController extends Controller
{
    /**
     * 处理微信的请求消息
     *
     * @return string
     */
    public function serve()
    {

        $wechat = app('wechat');

        $wechat->server->setMessageHandler(function($message){
            return "欢迎关注 yimuya！";
        });

        return $wechat->server->serve();
    }
}