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

Transport 360 Master Data
master_data = {
    "app_version": "1.1.6",
    "api_base_url": "https://api.transport360.in/",
    "app_store_url": "https://www.apple.com",
    "play_store_url": "https://play.google.com/store/apps/details?id=com.transport360app",
    "s3_url": "https://t360-content.s3.ap-south-1.amazonaws.com/",
    "company_type": [
        {
            "_id": "63415c489851ff7fcac166b3",
            "name": "I am a Truck Owner",
            "description": "I am Looking for Loads",
            "icon": "t360/icon/truck-owner.png"
        },
        {
            "_id": "63415e089851ff7fcac166b7",
            "name": "I am a Transporter",
            "description": "I am looking for Trucks & Loads",
            "icon": "t360/icon/transporter.png"
        },
        {
            "_id": "634168790f22bbb6f1406e37",
            "name": "I am a Agent",
            "description": "I Provide Load & Trucks",
            "icon": "t360/icon/transport-agent.png"
        },
        {
            "_id": "68c95eac02e10f86fb376b5f",
            "name": "I am a CFA or C&F",
            "description": "I am looking for Trucks",
            "icon": "t360/icon/cfa.png"
        }
    ],
    "banner_list": [
        {
            "filename": "banner_1735913785704.jpg",
            "path": "t360/uploads/banner/banner_1735913785704.jpg"
        },
        {
            "filename": "banner_1735913775519.jpg",
            "path": "t360/uploads/banner/banner_1735913775519.jpg"
        },
        {
            "filename": "banner_1735913765967.png",
            "path": "t360/uploads/banner/banner_1735913765967.png"
        }
    ],
    "chart_of_account_list": [
        {
            "id": 1,
            "name": "Assets"
        },
        {
            "id": 2,
            "name": "Liabilities"
        },
        {
            "id": 3,
            "name": "Equity"
        },
        {
            "id": 4,
            "name": "Income"
        },
        {
            "id": 5,
            "name": "Expenses"
        }
    ],
    "chart_of_account": {
        "1": "Assets",
        "2": "Liabilities",
        "3": "Equity",
        "4": "Income",
        "5": "Expenses"
    },
    "entity_type_list": [
        {
            "id": 1,
            "name": "Sole Propritor"
        },
        {
            "id": 2,
            "name": "Patnership"
        },
        {
            "id": 3,
            "name": "LLP"
        },
        {
            "id": 4,
            "name": "Private Limited"
        }
    ],
    "entity_type": {
        "1": "Sole Propritor",
        "2": "Patnership",
        "3": "LLP",
        "4": "Private Limited"
    },
    "vendor_type_list": [
        {
            "id": 1,
            "name": "Supplier"
        },
        {
            "id": 2,
            "name": "Consignor"
        },
        {
            "id": 3,
            "name": "Driver"
        },
        {
            "id": 4,
            "name": "Vendor"
        },
        {
            "id": 5,
            "name": "Fuel Station"
        },
        {
            "id": 6,
            "name": "Fuel Card"
        },
        {
            "id": 7,
            "name": "Fastag"
        },
        {
            "id": 8,
            "name": "Staff"
        }
    ],
    "vendor_type": {
        "1": "Supplier",
        "2": "Consignor",
        "3": "Driver",
        "4": "Vendor",
        "5": "Fuel Station",
        "6": "Fuel Card",
        "7": "Fastag",
        "8": "Staff"
    },
    "gst_type_list": [
        {
            "id": 1,
            "name": "Unregistered Business"
        },
        {
            "id": 2,
            "name": "Registered Regular"
        },
        {
            "id": 3,
            "name": "Composition"
        }
    ],
    "gst_type": {
        "1": "Unregistered Business",
        "2": "Registered Regular",
        "3": "Composition"
    },
    "driver_type_list": [
        {
            "id": 1,
            "name": "Own"
        },
        {
            "id": 2,
            "name": "Market"
        }
    ],
    "driver_type": {
        "1": "Own",
        "2": "Market"
    },
    "vehicle_ownership_list": [
        {
            "id": 1,
            "name": "Own"
        },
        {
            "id": 2,
            "name": "Market"
        },
        {
            "id": 3,
            "name": "Leased"
        }
    ],
    "vehicle_ownership": {
        "1": "Own",
        "2": "Market",
        "3": "Leased"
    },
    "lr_status_list": [
        {
            "id": 1,
            "name": "Pending"
        },
        {
            "id": 2,
            "name": "Draft"
        },
        {
            "id": 3,
            "name": "In Transit"
        },
        {
            "id": 4,
            "name": "At Party Point"
        },
        {
            "id": 5,
            "name": "Delivered"
        },
        {
            "id": 6,
            "name": "Bill Raised"
        },
        {
            "id": 7,
            "name": "Cancelled"
        }
    ],
    "lr_status": {
        "1": "Pending",
        "2": "Draft",
        "3": "In Transit",
        "4": "At Party Point",
        "5": "Delivered",
        "6": "Bill Raised",
        "7": "Cancelled"
    },
    "pod_status_list": [
        {
            "id": 1,
            "name": "Pending"
        },
        {
            "id": 2,
            "name": "Received"
        }
    ],
    "pod_status": {
        "1": "Pending",
        "2": "Received"
    },
    "trip_status_list": [
        {
            "id": 1,
            "name": "Draft"
        },
        {
            "id": 2,
            "name": "In Transit"
        },
        {
            "id": 3,
            "name": "At Party"
        },
        {
            "id": 4,
            "name": "Delivered"
        },
        {
            "id": 5,
            "name": "Cancelled"
        }
    ],
    "trip_status": {
        "1": "Draft",
        "2": "In Transit",
        "3": "At Party",
        "4": "Delivered",
        "5": "Cancelled"
    },
    "material_qty_type_list": [
        {
            "id": 3,
            "name": "Unit"
        },
        {
            "id": 4,
            "name": "Piece"
        },
        {
            "id": 1,
            "name": "Box"
        },
        {
            "id": 5,
            "name": "Bags"
        },
        {
            "id": 6,
            "name": "Drum"
        },
        {
            "id": 2,
            "name": "Ltr"
        },
        {
            "id": 7,
            "name": "Buckets"
        }
    ],
    "material_qty_type": {
        "1": "Box",
        "2": "Ltr",
        "3": "Unit",
        "4": "Piece",
        "5": "Bags",
        "6": "Drum",
        "7": "Buckets"
    },
    "material_weight_type_list": [
        {
            "id": 1,
            "name": "KG"
        },
        {
            "id": 2,
            "name": "TON"
        },
        {
            "id": 3,
            "name": "LTR"
        }
    ],
    "material_weight_type": {
        "1": "KG",
        "2": "TON",
        "3": "LTR"
    },
    "freight_type_list": [
        {
            "id": 4,
            "name": "Fixed"
        },
        {
            "id": 1,
            "name": "Qty"
        },
        {
            "id": 2,
            "name": "KOT"
        },
        {
            "id": 3,
            "name": "KG"
        },
        {
            "id": 5,
            "name": "Kms"
        },
        {
            "id": 6,
            "name": "Tons"
        },
        {
            "id": 7,
            "name": "Quintal"
        },
        {
            "id": 8,
            "name": "Other"
        }
    ],
    "freight_type": {
        "1": "Qty",
        "2": "KOT",
        "3": "KG",
        "4": "Fixed",
        "5": "Kms",
        "6": "Tons",
        "7": "Quintal",
        "8": "Other"
    },
    "bank_account_type_list": [
        {
            "id": 1,
            "name": "Bank"
        },
        {
            "id": 2,
            "name": "UPI"
        }
    ],
    "bank_account_type": {
        "1": "Bank",
        "2": "UPI"
    },
    "bank_list": [
        {
            "name": "State Bank of India",
            "code": "SBI"
        },
        {
            "name": "HDFC Bank",
            "code": "HDFC"
        },
        {
            "name": "ICICI Bank",
            "code": "ICICI"
        },
        {
            "name": "Axis Bank",
            "code": "AXIS"
        },
        {
            "name": "Kotak Mahindra Bank",
            "code": "KOTAK"
        },
        {
            "name": "IndusInd Bank",
            "code": "INDUSIND"
        },
        {
            "name": "Bank of Baroda",
            "code": "BOB"
        },
        {
            "name": "Punjab National Bank",
            "code": "PNB"
        },
        {
            "name": "Canara Bank",
            "code": "CANARA"
        },
        {
            "name": "Union Bank of India",
            "code": "UNION"
        },
        {
            "name": "IDFC First Bank",
            "code": "IDFC"
        },
        {
            "name": "Yes Bank",
            "code": "YES"
        },
        {
            "name": "Central Bank of India",
            "code": "CBI"
        },
        {
            "name": "Indian Bank",
            "code": "INDIAN"
        },
        {
            "name": "UCO Bank",
            "code": "UCO"
        },
        {
            "name": "Bank of India",
            "code": "BOI"
        },
        {
            "name": "Bank of Maharashtra",
            "code": "MAHARASHTRA"
        },
        {
            "name": "Federal Bank",
            "code": "FEDERAL"
        },
        {
            "name": "IDBI Bank",
            "code": "IDBI"
        },
        {
            "name": "RBL Bank",
            "code": "RBL"
        },
        {
            "name": "City Union Bank",
            "code": "CUB"
        },
        {
            "name": "Dhanlaxmi Bank",
            "code": "DHANLAXMI"
        },
        {
            "name": "Karnataka Bank",
            "code": "KARNATAKA"
        },
        {
            "name": "Karur Vysya Bank",
            "code": "KVB"
        },
        {
            "name": "Lakshmi Vilas Bank",
            "code": "LVB"
        },
        {
            "name": "South Indian Bank",
            "code": "SOUTHINDIAN"
        },
        {
            "name": "Tamilnad Mercantile Bank",
            "code": "TMB"
        },
        {
            "name": "Bandhan Bank",
            "code": "BANDHAN"
        },
        {
            "name": "AU Small Finance Bank",
            "code": "AU"
        },
        {
            "name": "Ujjivan Small Finance Bank",
            "code": "UJJIVAN"
        },
        {
            "name": "Jana Small Finance Bank",
            "code": "JANA"
        },
        {
            "name": "Equitas Small Finance Bank",
            "code": "EQUITAS"
        },
        {
            "name": "Fincare Small Finance Bank",
            "code": "FINCARE"
        },
        {
            "name": "Utkarsh Small Finance Bank",
            "code": "UTKARSH"
        },
        {
            "name": "Suryoday Small Finance Bank",
            "code": "SURYODAY"
        },
        {
            "name": "North East Small Finance Bank",
            "code": "NORTH_EAST"
        },
        {
            "name": "Capital Small Finance Bank",
            "code": "CAPITAL"
        },
        {
            "name": "ESAF Small Finance Bank",
            "code": "ESAF"
        },
        {
            "name": "Airtel Payments Bank",
            "code": "AIRTEL"
        },
        {
            "name": "India Post Payments Bank",
            "code": "IPPB"
        },
        {
            "name": "Paytm Payments Bank",
            "code": "PAYTM"
        },
        {
            "name": "Fino Payments Bank",
            "code": "FINO"
        },
        {
            "name": "Jio Payments Bank",
            "code": "JIO"
        },
        {
            "name": "Other",
            "code": "OTHER"
        }
    ],
    "consignor_template_list": [
        {
            "id": 1,
            "name": "Default"
        },
        {
            "id": 2,
            "name": "Parle CFA"
        },
        {
            "id": 3,
            "name": "Parle Transportation"
        },
        {
            "id": 4,
            "name": "JK Tyes"
        }
    ],
    "consignor_template": {
        "1": "Default",
        "2": "Parle CFA",
        "3": "Parle Transportation",
        "4": "JK Tyes"
    },
    "tds_section_list": [
        {
            "id": 1,
            "name": "1%"
        },
        {
            "id": 2,
            "name": "2%"
        }
    ],
    "gst_percentage_list": [
        {
            "id": 12,
            "name": "12%"
        },
        {
            "id": 18,
            "name": "18%"
        }
    ],
    "account_category": {
        "id": 1,
        "name": "Assets",
        "sub_category": [
            {
                "id": 3,
                "name": "Cash"
            },
            {
                "id": 2,
                "name": "Bank"
            },
            {
                "id": 14,
                "name": "Other"
            },
            {
                "id": 27,
                "name": "IDFC"
            },
            {
                "id": 28,
                "name": "Pay Now"
            },
            {
                "id": 15,
                "name": "Credit"
            },
            {
                "id": 26,
                "name": "Invoice"
            },
            {
                "id": 11,
                "name": "Driver Khata"
            }
        ]
    },
    "market_account_category": {
        "id": 1,
        "name": "Assets",
        "sub_category": [
            {
                "id": 3,
                "name": "Cash"
            },
            {
                "id": 2,
                "name": "Bank"
            },
            {
                "id": 14,
                "name": "Other"
            },
            {
                "id": 27,
                "name": "IDFC"
            },
            {
                "id": 28,
                "name": "Pay Now"
            },
            {
                "id": 10,
                "name": "Balance"
            }
        ]
    },
    "own_account_category": {
        "id": 1,
        "name": "Assets",
        "sub_category": [
            {
                "id": 3,
                "name": "Cash"
            },
            {
                "id": 2,
                "name": "Bank"
            },
            {
                "id": 14,
                "name": "Other"
            },
            {
                "id": 27,
                "name": "IDFC"
            },
            {
                "id": 28,
                "name": "Pay Now"
            },
            {
                "id": 10,
                "name": "Balance"
            },
            {
                "id": 11,
                "name": "Driver Khata"
            }
        ]
    },
    "payment_approval_status_list": [
        {
            "id": 1,
            "name": "Pending"
        },
        {
            "id": 2,
            "name": "Hold"
        },
        {
            "id": 3,
            "name": "Approved"
        },
        {
            "id": 4,
            "name": "Rejected"
        },
        {
            "id": 5,
            "name": "Completed"
        },
        {
            "id": 6,
            "name": "Payment From CB"
        },
        {
            "id": 7,
            "name": "CB Under Approval"
        },
        {
            "id": 8,
            "name": "CB Transaction Initiated"
        },
        {
            "id": 9,
            "name": "CB Transaction Failed"
        }
    ],
    "payment_approval_status": {
        "1": "Pending",
        "2": "Hold",
        "3": "Approved",
        "4": "Rejected",
        "5": "Completed",
        "6": "Payment From CB",
        "7": "CB Under Approval",
        "8": "CB Transaction Initiated",
        "9": "CB Transaction Failed"
    },
    "payment_approval_action_list": [
        {
            "id": 1,
            "name": "Pending"
        },
        {
            "id": 2,
            "name": "Hold"
        },
        {
            "id": 3,
            "name": "Approve"
        },
        {
            "id": 4,
            "name": "Reject"
        },
        {
            "id": 5,
            "name": "Complete"
        }
    ],
    "contract_chargeable_on_list": [
        {
            "id": 1,
            "name": "Invoice"
        },
        {
            "id": 2,
            "name": "Dispatch"
        },
        {
            "id": 3,
            "name": "Items"
        }
    ],
    "contract_chargeable_on": {
        "1": "Invoice",
        "2": "Dispatch",
        "3": "Items"
    },
    "contract_matrix_allowed_list": [
        {
            "id": 1,
            "name": "City-City"
        },
        {
            "id": 2,
            "name": "Zone-Zone"
        },
        {
            "id": 3,
            "name": "Unit-Consignee"
        },
        {
            "id": 4,
            "name": "City-Zone"
        },
        {
            "id": 5,
            "name": "Route wise"
        },
        {
            "id": 6,
            "name": "Unit-City"
        },
        {
            "id": 7,
            "name": "Pin-Pin"
        }
    ],
    "contract_matrix_allowed": {
        "1": "City-City",
        "2": "Zone-Zone",
        "3": "Unit-Consignee",
        "4": "City-Zone",
        "5": "Route wise",
        "6": "Unit-City",
        "7": "Pin-Pin"
    },
    "contract_rate_type_list": [
        {
            "id": 6,
            "name": "Flat Rate"
        },
        {
            "id": 1,
            "name": "Per KOT"
        },
        {
            "id": 2,
            "name": "% Per Invoice"
        },
        {
            "id": 3,
            "name": "Per KG"
        },
        {
            "id": 4,
            "name": "Per QTY"
        },
        {
            "id": 5,
            "name": "Per KMs"
        },
        {
            "id": 7,
            "name": "Per Ton"
        },
        {
            "id": 8,
            "name": "Per Quintal"
        }
    ],
    "contract_variable_rates_list": [
        {
            "id": 1,
            "name": "Vehicle Type"
        },
        {
            "id": 2,
            "name": "Vehicle Ownership"
        },
        {
            "id": 3,
            "name": "Vehicle No"
        },
        {
            "id": 4,
            "name": "Supplier"
        },
        {
            "id": 5,
            "name": "Weight Range(KG)"
        },
        {
            "id": 6,
            "name": "Vehicle Group"
        }
    ],
    "contract_other_settings_list": [
        {
            "id": 1,
            "name": "Clubbing with Other Consignor"
        },
        {
            "id": 2,
            "name": "Editable"
        },
        {
            "id": 3,
            "name": "Show Amount"
        },
        {
            "id": 4,
            "name": "Multiple Rates Allowed"
        },
        {
            "id": 5,
            "name": "Highest Freight"
        }
    ],
    "vehicle_status_list": [
        {
            "id": 1,
            "name": "Available"
        },
        {
            "id": 2,
            "name": "In Transit"
        },
        {
            "id": 3,
            "name": "Maintenance"
        }
    ],
    "vehicle_status": {
        "1": "Available",
        "2": "In Transit",
        "3": "Maintenance"
    },
    "invoice_status_list": [
        {
            "id": 1,
            "name": "Pending"
        },
        {
            "id": 2,
            "name": "Part Payment"
        },
        {
            "id": 3,
            "name": "Completed"
        },
        {
            "id": 4,
            "name": "Cancelled"
        },
        {
            "id": 5,
            "name": "Overdue"
        }
    ],
    "invoice_status": {
        "1": "Pending",
        "2": "Part Payment",
        "3": "Completed",
        "4": "Cancelled",
        "5": "Overdue"
    },
    "billraise_lr_list_columns": [
        {
            "Header": "LR No",
            "accessor": "lr_number",
            "view": 1,
            "lock": 1
        },
        {
            "Header": "Trip No",
            "accessor": "trip_number",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Indent No",
            "accessor": "indent_number",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "LR Date",
            "accessor": "invoice_date",
            "view": 1,
            "lock": 1
        },
        {
            "Header": "Dispatch Date",
            "accessor": "dispatch_date",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Party",
            "accessor": "consignor_name",
            "view": 1,
            "lock": 1
        },
        {
            "Header": "Branch",
            "accessor": "branch_name",
            "view": 1,
            "lock": 1
        },
        {
            "Header": "From Station",
            "accessor": "from_location",
            "view": 1,
            "lock": 1
        },
        {
            "Header": "To Station",
            "accessor": "to_location",
            "view": 1,
            "lock": 1
        },
        {
            "Header": "Invoice No",
            "accessor": "invoice_number",
            "view": 1,
            "lock": 1
        },
        {
            "Header": "Field 2",
            "accessor": "sap_invoice_number",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Field 3",
            "accessor": "gst_number",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Field 4",
            "accessor": "po_number",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Field 5",
            "accessor": "mlr_number",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Status",
            "accessor": "lr_status",
            "view": 1,
            "lock": 1
        },
        {
            "Header": "POD Status",
            "accessor": "pod_status",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Eway Bill Number",
            "accessor": "eway_bill_number",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Eway Bill Start Date",
            "accessor": "eway_bill_date",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Eway Bill Expiry Date",
            "accessor": "eway_expiry_date",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Eway Bill Status",
            "accessor": "eway_bill_status",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Total QTY",
            "accessor": "total_qty",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Total KOT",
            "accessor": "total_kot",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Total Weight",
            "accessor": "total_weight",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Total Freight",
            "accessor": "total_freight",
            "view": 1,
            "lock": 1
        },
        {
            "Header": "Balance",
            "accessor": "balance",
            "view": 1,
            "lock": 1
        },
        {
            "Header": "Claim Receivable",
            "accessor": "claim_receivable",
            "view": 1,
            "lock": 1
        },
        {
            "Header": "Claim Payable",
            "accessor": "claim_payable",
            "view": 1,
            "lock": 1
        },
        {
            "Header": "Vehicle No",
            "accessor": "vehicle_no",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Vehicle Type",
            "accessor": "lorry_type",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Vehicle Actual Type",
            "accessor": "vehicle_type",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Vehicle Ownership",
            "accessor": "vehicle_ownership",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Supplier Name",
            "accessor": "supplier_name",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Driver Name",
            "accessor": "driver_name",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Delivery Date",
            "accessor": "delivery_date",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "At Party Point Date",
            "accessor": "at_party_point_date",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "POD Received Date",
            "accessor": "pod_date",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "POD Attachment",
            "accessor": "pod_file",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Delivery Time",
            "accessor": "delivery_time",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Created By",
            "accessor": "created_by",
            "view": 0,
            "lock": 0
        },
        {
            "Header": "Last Updated By",
            "accessor": "updated_by",
            "view": 0,
            "lock": 0
        }
    ],
    "field_type_list": [
        {
            "id": 1,
            "name": "Alpha+Number"
        },
        {
            "id": 2,
            "name": "Number"
        },
        {
            "id": 3,
            "name": "Any"
        }
    ],
    "general_expense": {
        "id": 8,
        "name": "General Expenses",
        "sub_type": []
    },
    "lr_bilty_format_list": [
        {
            "id": 1,
            "name": "Format-1"
        },
        {
            "id": 2,
            "name": "Format-2"
        },
        {
            "id": 3,
            "name": "Format-3"
        },
        {
            "id": 4,
            "name": "Format-4"
        },
        {
            "id": 5,
            "name": "Format-5"
        }
    ],
    "lr_bilty_format": {
        "1": "Format-1",
        "2": "Format-2",
        "3": "Format-3",
        "4": "Format-4",
        "5": "Format-5"
    },
    "addressbook_category_list": [
        {
            "id": 1,
            "name": "Party"
        },
        {
            "id": 2,
            "name": "Supplier"
        },
        {
            "id": 3,
            "name": "Vendor"
        },
        {
            "id": 4,
            "name": "Factory"
        },
        {
            "id": 5,
            "name": "Dhaba"
        },
        {
            "id": 6,
            "name": "Fuel Station"
        },
        {
            "id": 7,
            "name": "Driver Home"
        },
        {
            "id": 8,
            "name": "Service Center"
        }
    ],
    "plan_status_list": [
        {
            "id": 1,
            "name": "Active"
        },
        {
            "id": 2,
            "name": "Intransit"
        },
        {
            "id": 3,
            "name": "Delivered"
        },
        {
            "id": 4,
            "name": "Cancelled"
        }
    ],
    "plan_status": {
        "1": "Active",
        "2": "Intransit",
        "3": "Delivered",
        "4": "Cancelled"
    },
    "bid_status_list": [
        {
            "id": 1,
            "name": "No Bids"
        },
        {
            "id": 2,
            "name": "New Bids"
        },
        {
            "id": 3,
            "name": "Accepted"
        },
        {
            "id": 4,
            "name": "Closed"
        }
    ],
    "bid_status": {
        "1": "No Bids",
        "2": "New Bids",
        "3": "Accepted",
        "4": "Closed"
    },
    "plan_responses_list": [
        {
            "id": 1,
            "name": "No Response"
        },
        {
            "id": 2,
            "name": "Plan Noted"
        },
        {
            "id": 3,
            "name": "Fleet Confirmed"
        },
        {
            "id": 4,
            "name": "Fleet Loading"
        },
        {
            "id": 5,
            "name": "Fleet Loaded"
        }
    ],
    "plan_responses": {
        "1": "No Response",
        "2": "Plan Noted",
        "3": "Fleet Confirmed",
        "4": "Fleet Loading",
        "5": "Fleet Loaded"
    },
    "plan_payment_terms_list": [
        {
            "id": 1,
            "name": "Advance"
        },
        {
            "id": 2,
            "name": "To Pay"
        }
    ],
    "plan_payment_terms": {
        "1": "Advance",
        "2": "To Pay"
    },
    "plan_lorry_type_map": {
        "T1": {
            "lorry_type_id": "6475f4b77404cec6330404d9",
            "vehicle_type_id": "636e3ab4da8ab0259ee566fa"
        },
        "T2": {
            "lorry_type_id": "6475f4b77404cec6330404d9",
            "vehicle_type_id": "636e3ab4da8ab0259ee566fb"
        },
        "C1": {
            "lorry_type_id": "6475fd417404cec633040515",
            "vehicle_type_id": "6475fc7a7404cec633040500"
        },
        "C3": {
            "lorry_type_id": "6475fd417404cec633040515",
            "vehicle_type_id": "6475fcb27404cec633040506"
        },
        "C4": {
            "lorry_type_id": "6475fd417404cec633040515",
            "vehicle_type_id": "6475fcde7404cec63304050c"
        }
    },
    "eway_bill_status_list": [
        {
            "id": 1,
            "name": "Without Eway"
        },
        {
            "id": 2,
            "name": "Active Eway"
        },
        {
            "id": 3,
            "name": "Closed"
        },
        {
            "id": 4,
            "name": "Expiring Today"
        },
        {
            "id": 5,
            "name": "Expired"
        }
    ],
    "eway_bill_status": {
        "1": "Without Eway",
        "2": "Active Eway",
        "3": "Closed",
        "4": "Expiring Today",
        "5": "Expired"
    },
    "supplier_freights": {
        "id": 1,
        "name": "Trip Freight",
        "sub_type": [
            {
                "id": 1,
                "name": "Advance Freight"
            },
            {
                "id": 2,
                "name": "Balance Freight"
            }
        ]
    },
    "supplier_claims": {
        "id": 2,
        "name": "Claims",
        "sub_type": [
            {
                "id": 1,
                "name": "Pay Supplier"
            },
            {
                "id": 2,
                "name": "Charge Supplier"
            }
        ]
    },
    "supplier_other_charges": {
        "id": 3,
        "name": "Other Charges",
        "sub_type": [
            {
                "id": 1,
                "name": "Expenses"
            },
            {
                "id": 2,
                "name": "Receipt"
            }
        ]
    },
    "supplier_fuels": {
        "id": 13,
        "name": "Fuel Payment",
        "sub_type": [
            {
                "id": 1,
                "name": "Fuel Station"
            }
        ]
    },
    "driver_trip_charges": {
        "id": 7,
        "name": "Trip Charges",
        "sub_type": [
            {
                "id": 1,
                "name": "Paid"
            },
            {
                "id": 2,
                "name": "Receipt"
            }
        ]
    },
    "driver_claims": {
        "id": 14,
        "name": "Claims",
        "sub_type": [
            {
                "id": 1,
                "name": "Pay Driver"
            },
            {
                "id": 2,
                "name": "Charge Driver"
            }
        ]
    },
    "driver_other_charges": {
        "id": 15,
        "name": "Other Charges",
        "sub_type": [
            {
                "id": 1,
                "name": "Expenses"
            },
            {
                "id": 2,
                "name": "Receipt"
            }
        ]
    },
    "driver_fuels": {
        "id": 4,
        "name": "Fuel Payment",
        "sub_type": [
            {
                "id": 1,
                "name": "Fuel Station"
            },
            {
                "id": 2,
                "name": "Fuel Card"
            },
            {
                "id": 3,
                "name": "Cash"
            },
            {
                "id": 4,
                "name": "Bank"
            },
            {
                "id": 5,
                "name": "Other"
            }
        ]
    },
    "truck_fuels": {
        "id": 31,
        "name": "Fuel Payment",
        "sub_type": [
            {
                "id": 1,
                "name": "Fuel Station"
            },
            {
                "id": 2,
                "name": "Fuel Card"
            },
            {
                "id": 3,
                "name": "Cash"
            },
            {
                "id": 4,
                "name": "Bank"
            },
            {
                "id": 5,
                "name": "Other"
            }
        ]
    },
    "pay_driver": {
        "id": 5,
        "name": "Pay Driver",
        "sub_type": []
    },
    "party_freights": {
        "id": 16,
        "name": "Trip Freight",
        "sub_type": [
            {
                "id": 1,
                "name": "Advance Freight"
            },
            {
                "id": 2,
                "name": "Balance Freight"
            }
        ]
    },
    "party_claims": {
        "id": 17,
        "name": "Claims",
        "sub_type": [
            {
                "id": 1,
                "name": "Pay Party"
            },
            {
                "id": 2,
                "name": "Charge Party"
            }
        ]
    },
    "eway_extnRemarks": [
        {
            "id": 99,
            "name": "Others"
        },
        {
            "id": 1,
            "name": "Natural Calamity"
        },
        {
            "id": 2,
            "name": "Law and Order Situation"
        },
        {
            "id": 4,
            "name": "Transshipment"
        },
        {
            "id": 5,
            "name": "Accident"
        }
    ],
    "eway_lr_list_status": [
        {
            "id": 0,
            "name": "Active LR Eway"
        },
        {
            "id": 1,
            "name": "Without Eway"
        },
        {
            "id": 2,
            "name": "Active Eway"
        },
        {
            "id": 3,
            "name": "Closed"
        },
        {
            "id": 4,
            "name": "Expiring Today"
        },
        {
            "id": 5,
            "name": "Expired"
        },
        {
            "id": 6,
            "name": "Auto Extention Failed"
        }
    ],
    "market_vehicle_documents": [
        {
            "id": 1,
            "name": "Registration Certificate (RC)",
            "number_of_doc": 0,
            "is_locked": true,
            "status": 1,
            "is_deleted": 0
        },
        {
            "id": 2,
            "name": "Pollution PUC",
            "number_of_doc": 0,
            "is_locked": true,
            "status": 1,
            "is_deleted": 0
        },
        {
            "id": 3,
            "name": "Fitness",
            "number_of_doc": 0,
            "is_locked": true,
            "status": 1,
            "is_deleted": 0
        },
        {
            "id": 4,
            "name": "Insurance",
            "number_of_doc": 0,
            "is_locked": true,
            "status": 1,
            "is_deleted": 0
        },
        {
            "id": 5,
            "name": "National Permit",
            "number_of_doc": 0,
            "is_locked": true,
            "status": 1,
            "is_deleted": 0
        },
        {
            "id": 6,
            "name": "State Permit",
            "number_of_doc": 0,
            "is_locked": true,
            "status": 1,
            "is_deleted": 0
        }
    ],
    "own_vehicle_documents": [
        {
            "id": 1,
            "name": "Registration Certificate (RC)",
            "number_of_doc": 0,
            "is_locked": true,
            "status": 1,
            "is_deleted": 0
        },
        {
            "id": 2,
            "name": "Pollution PUC",
            "number_of_doc": 0,
            "is_locked": true,
            "status": 1,
            "is_deleted": 0
        },
        {
            "id": 3,
            "name": "Fitness",
            "number_of_doc": 0,
            "is_locked": true,
            "status": 1,
            "is_deleted": 0
        },
        {
            "id": 4,
            "name": "Insurance",
            "number_of_doc": 0,
            "is_locked": true,
            "status": 1,
            "is_deleted": 0
        },
        {
            "id": 5,
            "name": "National Permit",
            "number_of_doc": 0,
            "is_locked": true,
            "status": 1,
            "is_deleted": 0
        },
        {
            "id": 6,
            "name": "State Permit",
            "number_of_doc": 0,
            "is_locked": true,
            "status": 1,
            "is_deleted": 0
        }
    ],
    "ewayExtensionReasonList": [
        {
            "id": 99,
            "name": "Others",
            "remarks": [
                {
                    "name": "Mechanical failure in vehicle caused delay."
                },
                {
                    "name": "Unexpected delay due to driver unavailability."
                },
                {
                    "name": "Route diverted due to traffic congestion."
                },
                {
                    "name": "Delay caused by operational issues."
                }
            ]
        },
        {
            "id": 1,
            "name": "Natural Calamity",
            "remarks": [
                {
                    "name": "Vehicle delayed due to heavy rainfall."
                },
                {
                    "name": "Movement affected by flood conditions."
                },
                {
                    "name": "Goods transit interrupted due to landslide."
                },
                {
                    "name": "Natural disaster caused route blockage."
                }
            ]
        },
        {
            "id": 2,
            "name": "Law and Order Situation",
            "remarks": [
                {
                    "name": "Movement delayed due to curfew imposed."
                },
                {
                    "name": "Transit halted due to police checking and law enforcement."
                },
                {
                    "name": "Transport held due to local protest or bandh."
                }
            ]
        },
        {
            "id": 4,
            "name": "Transshipment",
            "remarks": [
                {
                    "name": "Goods shifted to another vehicle due to breakdown."
                },
                {
                    "name": "Delay due to unloading and reloading at transshipment hub."
                },
                {
                    "name": "Vehicle change caused temporary delay in transit."
                }
            ]
        },
        {
            "id": 5,
            "name": "Accident",
            "remarks": [
                {
                    "name": "Vehicle met with an accident en route."
                },
                {
                    "name": "Delay due to damage assessment after road accident."
                },
                {
                    "name": "Goods vehicle involved in a minor collision."
                }
            ]
        }
    ],
    "api_config": [
        {
            "id": 1,
            "name": "SIM Tracking API"
        },
        {
            "id": 2,
            "name": "Eway Bill API"
        },
        {
            "id": 3,
            "name": "RC API"
        },
        {
            "id": 4,
            "name": "MAP API"
        }
    ],
    "banner_type": {
        "1": "DEFAULT",
        "2": "FASTAG",
        "3": "EASEBUZZ"
    },
    "supplier_tds_list": [
        {
            "id": 0,
            "name": "No Deduction"
        },
        {
            "id": 1,
            "name": "1%"
        },
        {
            "id": 2,
            "name": "2%"
        }
    ],
    "vehicle_planning_type": [
        {
            "name": "On Time"
        },
        {
            "name": "Vehicle Running Late By"
        },
        {
            "name": "At Party Point and Unload By"
        },
        {
            "name": "Running Before"
        },
        {
            "name": "Other"
        }
    ],
    "vehicle_planning_time": [
        {
            "name": "1 Hour"
        },
        {
            "name": "3 Hours"
        },
        {
            "name": "6 Hours"
        },
        {
            "name": "12 Hours"
        },
        {
            "name": "24 Hours"
        }
    ],
    "vehicle_types": [
        {
            "name": "Car/Jeep/Van"
        },
        {
            "name": "LCV"
        },
        {
            "name": "Bus"
        },
        {
            "name": "4 to 6 Axle"
        },
        {
            "name": "HCM/EME"
        },
        {
            "name": "7 or more Axle"
        },
        {
            "name": "Upto 3 Axle Vehicle"
        }
    ]
}