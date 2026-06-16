1. User Search & Listing (Admin Panel)
Admin wants to search users by name/email and list them with pagination.
You will learn find $regex, $or select sort limit, skip lean
API tasks = Search by name OR email, Case-insensitive search, Paginated response, Exclude deleted users (is_deleted != 1)

2. Soft Delete User
Admin deletes a user but data should remain in DB.
You will learn updateOne, $set, soft delete pattern, 
API tasks = Update is_deleted = 1, Prevent hard delete, User should not appear in list APIs

3. Duplicate Name Check (Case-Insensitive)
While creating/updating a Vehicle Type / Document Type, name must be unique per company.
You will learn findOne,$ne,$regex,Exact string match (case-insensitive)
API tasks = While updating, exclude current _id, Prevent Invoice, invoice, INVOICE duplicates

4. Auto Increment ID Generator
You need to generate the next document ID.
You will learn findOne, sort({ id: -1 }), lean
API tasks = Fetch latest document, Generate next ID safely

5. Assign Driver to Vehicle (Conditional Update)
Vehicle should get a driver only if driver is not already assigned.
You will learn , updateOne, Conditional query
API tasks = Update only if driver_id == null , Prevent overwrite

6. Timeline / Activity History Tracking
Whenever a document is disabled or updated, history should be maintained.
You will learn, updateMany, $push, Array history logic
API tasks = Push timeline object, Store title, date_time, created_by

7. Remove File from Document
User deletes a file from uploaded documents.
You will learn findByIdAndUpdate, $pull
API tasks = Remove specific file path from array, Return updated document

8. Advanced Filter Using Aggregation
User has multiple accounts, but you only want matching category & subcategory.
You will learn Aggregation pipeline, $match, $project, $filter
API tasks = Filter nested array Return only matching elements

9. Role & Company Based Data Access
User belongs to multiple companies with different roles.
You will learn find,populate,select,lean
API tasks = Fetch user companies Populate role & company names, Hide sensitive fields

10. Bulk Status Update (updateMany)
When trip ends, all LRs should be delivered.
You will learn updateMany, $ne, Bulk update logic
API tasks = Update only pending LRs, Avoid updating already delivered ones

11. Conditional Update Using Aggregation Pipeline
Only add E-way timeline if eway bill exists.
You will learn Aggregation update pipeline, $cond, $concatArrays, $ifNull
API tasks = Conditional array update, Prevent empty timeline entries

12. Trip Listing with Deep Populate
Trip list page with vehicle, driver, supplier, LR details.
You will learn find, Multiple populate, Nested populate, Pagination
API tasks = Fetch trip summary, Fetch LR details inside trip, Paginate results

13. Update Freight Summary with Calculations
Update trip freight & fuel details.
You will learn updateOne, $set, $inc
API tasks = Update calculated fields, Increment fuel values safely

14. Search + Filter + Pagination Combo
Trip list with search + date filter + status filter.
You will learn Dynamic query building, $or, $regex, Pagination
API tasks = Build query conditionally, Combine multiple filters cleanly

15. Authorization Based Data Filtering
User can see all accounts OR only assigned ones.
You will learn, Aggregation, Conditional filtering logic
API tasks = If allow_all_account = true → return all, Else → return filtered account_list

16. Role-Based Access Control (RBAC)
An API where only admin users can access certain routes, while normal users cannot.

17. File Upload API
Upload images/documents using multer and store file path in DB.

18. API Rate Limiting Scenario
Limit number of requests per user/IP to prevent abuse.