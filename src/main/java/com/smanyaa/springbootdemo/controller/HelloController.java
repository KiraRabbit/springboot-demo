package com.smanyaa.springbootdemo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HelloController {

    @RequestMapping("/")
    public String getHello() {
        return "<h3>\"ヾ(◍°∇°◍)ﾉﾞ     启动成功      ヾ(◍°∇°◍)ﾉﾞ\"</h3>";
    }
}
