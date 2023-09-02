import { AboutController } from "./controllers/AboutController.js";
import { BackgroundsController } from "./controllers/BackgroundsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { WeathersController } from "./controllers/WeathersController.js";
import { AboutView } from "./views/AboutView.js";




/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [HomeController, QuotesController, BackgroundsController, WeathersController],
    // view: /*html*/`

    // `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */