package com.circre.backend.service;

import com.circre.backend.entity.Material;

import java.util.List;

public interface MaterialService {
    Material getMaterialById(Integer id);

    List<Material> getMaterialByType(String type);
}
