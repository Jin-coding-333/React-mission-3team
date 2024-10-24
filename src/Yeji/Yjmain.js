import React from "react";
import {Intro} from './yejiintro.js';
import {Hobby} from './hobby.js'
import {HandleApi} from './data.js';


export function Yeji() {
    return(
        <div>
            <Intro/>
            <Hobby/>
            <HandleApi/>
        </div>
    );
}
