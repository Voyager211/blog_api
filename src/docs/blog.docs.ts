// src/docs/blog.docs.ts

/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 6a4fce4ad7db065e60322ef7
 *         title:
 *           type: string
 *           example: My First API Blog Post
 *         content:
 *           type: string
 *           example: This is the content of my very first blog post.
 *         author:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               example: 6a4e0d973cae985c1d91f231
 *             name:
 *               type: string
 *               example: John Doe
 *             email:
 *               type: string
 *               example: john@example.com
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           example: [technology, api, backend]
 *         status:
 *           type: string
 *           enum: [draft, published]
 *           example: published
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: Blog management and retrieval
 */

/**
 * @swagger
 * /blogs:
 *   get:
 *     summary: Get all published blogs
 *     description: Fetches a list of all blog posts that have the status set to 'published'.
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 count:
 *                   type: number
 *                   example: 1
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Blog'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /blogs/{id}:
 *   get:
 *     summary: Get a specific blog by ID
 *     description: Fetches a single published blog post by its MongoDB ObjectId.
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The MongoDB ObjectId of the blog
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Blog'
 *       404:
 *         description: Blog not found or unavailable
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /blogs/create:
 *   post:
 *     summary: Create a new blog post
 *     description: Creates a new blog. Requires a valid authentication cookie.
 *     tags: [Blogs]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 example: Mastering Express Middleware
 *               content:
 *                 type: string
 *                 example: Middleware functions are the backbone of Express.js.
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: [nodejs, express]
 *               status:
 *                 type: string
 *                 enum: [draft, published]
 *                 example: draft
 *     responses:
 *       201:
 *         description: Blog created successfully
 *       400:
 *         description: Missing required fields
 *       401:
 *         description: Unauthorized - User must be logged in
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /blogs/update/{id}:
 *   patch:
 *     summary: Update an existing blog post
 *     description: Updates a blog. Only the original author can update it.
 *     tags: [Blogs]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The MongoDB ObjectId of the blog to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated Blog Title
 *               content:
 *                 type: string
 *                 example: Updated content goes here.
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: [updated-tag]
 *               status:
 *                 type: string
 *                 enum: [draft, published]
 *                 example: published
 *     responses:
 *       200:
 *         description: Blog updated successfully
 *       403:
 *         description: Forbidden - Not authorized to update this blog
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /blogs/delete/{id}:
 *   delete:
 *     summary: Delete a blog post
 *     description: Permanently deletes a blog. Only the original author can delete it.
 *     tags: [Blogs]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The MongoDB ObjectId of the blog to delete
 *     responses:
 *       200:
 *         description: Blog deleted successfully
 *       403:
 *         description: Forbidden - Not authorized to delete this blog
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Server error
 */