package com.niit.FavoriteService.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND,reason = "restaurant not found")
public class RestaurantNotFoundException extends Exception{
}
