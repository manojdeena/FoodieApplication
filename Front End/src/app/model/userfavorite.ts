import { RestaurantData } from "./restaurant-description";
export type UserFavorite={

    userEmail?:string;
    userPassword?:string;
    userName?:string;
    userPhoneNo?: number;
    userImage?:File,
    restaurantList?:RestaurantData[]
}
