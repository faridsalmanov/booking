package com.ferid.shopping.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="users")
@Getter
@Setter
public class User {
@Id
private String username;
private String password;
private Boolean enabled;

 
}

 


