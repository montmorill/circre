package com.circre.backend.service;

import com.circre.backend.entity.Activity;

public interface ActivityService {
    //根据id查询活动
    Activity getActivityById(Integer id);
}
