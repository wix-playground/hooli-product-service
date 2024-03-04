/**
 * @api {post} /product Create a new Product
 * @apiName CreateProduct
 * @apiGroup Product
 *
 * @apiBody {String} id ID of the product
 * @apiBody {String} name=Ball Name of the Product
 * @apiBody {number} quantity Quantity currently left in inventory
 * @apiBody {number} price Product price
 *
 * @apiSuccess {Number} id         The new Product ID.
 */

/**
 * @api {get} /product/:id Get Product
 * @apiName GetProduct
 * @apiGroup Product
 *
 * @apiParam {String} id Product unique ID.
 *
 * @apiSuccess {Object} product The new Product.
 */

/**
 * @api {post} /setProductName Set Product new name
 * @apiName UpdateProduct
 * @apiGroup Product
 *
 * @apiBody {String} id ID of the product
 * @apiBody {String} newName=Ball Name of the Product
 *
 * @apiSuccess {Number} id         The new Product ID.
 */