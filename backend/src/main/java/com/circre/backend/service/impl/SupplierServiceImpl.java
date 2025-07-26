package com.circre.backend.service.impl;

import com.circre.backend.entity.Supplier;
import com.circre.backend.mapper.SupplierMapper;
import com.circre.backend.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * {@code @BelongsProject:}be
 * {@code @BelongsPackage:}com.circre.backend.service.impl
 * {@code @Author:} Xukai
 * {@code @CreateTime:}2025-07-26  12:23
 * {@code @Description:}TODO
 * {@code @Version:}1.0
 */
@Service
public class SupplierServiceImpl implements SupplierService {
    @Autowired
    private SupplierMapper supplierMapper;
    public Supplier getSupplierById(Integer id) {
        return supplierMapper.getSupplierById(id);
    }
}
