---
templateKey: blog-post
title: How to Troubleshoot Your Internet Problems (for Dummies)
date: 2020-10-12T23:33:11.628Z
description: >-
  I'm writing this so I can avoid repeating myself when I help others with their
  internet.
featuredpost: true
featuredimage: /img/2011-11-29_122259.jpg
tags:
  - modem
  - router
  - internet
  - troubleshooting
---
Things you're going to need before you can troubleshoot:

* PC that has an ethernet port
* Ethernet cable
* Making sure nobody is downloading/streaming


### Just what exactly is a modem and router?

Before you can figure out what's wrong with your internet you need to know the difference between a **modem** and a **router**:

A modem looks like a long black box standing up and only does one really important job: **A modem translates data as it comes in and encodes it as it goes out.** It has nothing to do with the wi-fi in your house.

A router looks like a black box laying down and usually has a few antennae coming out of it **and its main job is to provide wi-fi** (and provide ethernet ports). **This is usually where most of your problems will lie.**

*Note: If you only have one piece of equipment and you have wi-fi then you have a modem-router combo. I highly suggest getting a dedicated modem and router because these modem-router combos are generally mediocre at doing both.*

### Ping Command

Before you can diagnose your internet problem, I'm going to have to teach you one small technical trick. This will only work for a Windows PC.

Press the Windows start menu button or hit the windows key and type in **Command Prompt** and run it. Type in the command **ping -t google.com** and run it from the command prompt and let it run for as long as you want to check your internet stability.

![example of ping command](/img/ping.png "example of ping command")

The only important part of this that you need to pay attention to is the time part:

* **For 1ms to 50ms:** Your internet is doing great. There's nothing you need to do. Why are you even here?
* **For 50ms-100ms:** Your internet is acceptable.
* **For 100ms-150ms:** Your internet is beginning to lag. Most likely someone on your network is downloading something or streaming something.
* **For 150ms or 250ms and higher:** Your internet is lagging considerably.  Somebody is likely downloading something at max speeds.
* **For some ridiculous time like 1000ms to 2000ms:** Your internet is barely working. Extreme lag is present, don't expect anything to work.

If you see another type of response like "connection is timed out" or "unable to resolve host", then you're either losing internet connection or your internet is unstable.

Now that you've got this handy tool under your belt, it's time to start figuring out what's the problem.

### Actually finding out what's wrong with your internet

First thing if you haven't already, run the ping command and check your internet stability. Most likely you're getting some combination of high milliseconds and/or having your internet connection drop. Once you've confirmed it, go ahead and take the ethernet cable going from your modem to your router and put it so that the cable is going from your modem into your PC. You want to do this so you can split the two and test them independently, so if you bypass the router and the problem is gone, then you know its the router. If the problem persists, then you know its the modem or the wiring.

Go ahead and run the ping command again and if you've noticed that your time from the ping command is much faster and more stable like the above picture, then you've confirmed that the problem is the router.

### So it turns out the router WAS the problem

Generally there are two reasons why the router is the problem:

1. Your router is a cheap piece of junk
2. You live in an area that has a lot of wi-fi signals like an apartment or condo

Reason one is pretty self-explanatory but as for reason two, imagine you're in a big room filled to the brim with lots of people who are all in conversation. Sometimes you can't even hear yourself talk. You can't tell everybody else in the room to leave so you can your conversation in peace, but you can buy a megaphone and drown out everybody else for crystal clear communication. A decent router goes for at least $70 or $80.

### "But I don't want to spend too much money on a router"

I hear this all too often. You're going to be using this router pretty much every waking moment at home so why not spend money on it? After all, people spend money on things like expensive food and items, car payments and stuff. These are things you use sometimes or once. I'm ranting, but money on a router is well spend, so do it.

### TL;DR

It's probably the router, don't skimp out on one if you're replacing it.
