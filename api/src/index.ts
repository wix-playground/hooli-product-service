/**
 * @apiDefine AuthorizationHeader
 *
 * @apiHeader {String} Authorization access token
 * @apiHeaderExample {json} Header-Example:
 *      {
 *        "Authorization": "SdCl345xxxxxxxxxxxx"
 *      }
 */

/**
 * @apiDefine Forbidden
 *
 * @apiError (Error 4xx) Forbidden Unauthorized
 */


/**
 * @api {post} /product Create a new Product
 * @apiName CreateProduct
 * @apiGroup Product
 *
 * @apiUse AuthorizationHeader
 *
 * @apiBody {String} id ID of the product
 * @apiBody {String} name=Ball Name of the Product
 * @apiBody {number} quantity Quantity currently left in inventory
 * @apiBody {number} price Product price
 *
 * @apiSuccess (Success 200) {Number} id         The new Product ID.
 * @apiUse Forbidden
 */

/**
 * @api {get} /product/:id Get Product
 * @apiName GetProduct
 * @apiGroup Product
 *
 * @apiUse AuthorizationHeader
 *
 * @apiParam {String} id Product unique ID.
 *
 * @apiSuccess (Success 200) {Object} product The new Product.
 * @apiUse Forbidden
 */

/**
 * @api {post} /setProductName Set Product new name
 * @apiName UpdateProduct
 * @apiGroup Product
 *
 * @apiUse AuthorizationHeader
 *
 * @apiBody {String} id ID of the product
 * @apiBody {String} newName=Ball Name of the Product
 *
 * @apiSuccess (Success 200) {Number} id         The new Product ID.
 * @apiUse Forbidden
 */

/**
 * @api {delete} /product delete Product
 * @apiName DeleteProduct
 * @apiGroup Product
 *
 * @apiUse AuthorizationHeader
 *
 * @apiBody {String} id ID of the product
 *
 * @apiSuccess (Success 200) {String} message         Indicate if the process started
 * @apiUse Forbidden
 */

/**
 * @api {get} /listProducts List Product
 * @apiName ListProduct
 * @apiGroup Product
 *
 * @apiUse AuthorizationHeader
 *
 * @apiSuccess (Success 200) {Object[]} products.
 * @apiUse Forbidden
 */