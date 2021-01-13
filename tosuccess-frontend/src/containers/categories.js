import React from "react";

import CategoriesPage from '../components/Category_Page/categories_page';

import '../style/activity_page.css';


export default function Activities(){

    //Had to call this as a component to manage the modal. Might be a fix but can't be bothered to figure out now
    return(
        <div>
            <CategoriesPage />
        </div>
    );
}