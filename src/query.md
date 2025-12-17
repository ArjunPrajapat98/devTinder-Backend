
-----------------------------
if (search) {
    query.$or = [
        { name: { $regex: search, $options: 'i' } }
    ];
}
-----------------------------
    await ZoneModel.updateOne(
        {
            _id: zone_id,
            company_id
        },
        {
            $set: {
                is_deleted: 1
            }
        }
    )
-----------------------------
 const latestDoc = await vehicleDocType.findOne({}).sort({ id: -1 }).lean();
-----------------------------
 if (search && search.trim()) {
    filter.name = { $regex: search.trim(), $options: 'i' };
}
-----------------------------
const isDuplicate = await vehicleDocType.findOne({
    id: { $ne: _id },
    id: id
}).lean();
-----------------------------
          const duplicateName = await vehicleDocType.findOne({
    _id: { $ne: _id },
    name: { $regex: `^${trimmedName}$`, $options: 'i' },  // exact string match, case-insensitive
    company_id: existingDoc.company_id,
    is_deleted: { $ne: 1 }
}).lean();

-----------------------------
    await vehicleDocument.updateMany(
        { vehicle_no, doc_type_id, is_active: 1 },
        {
            $set: { is_active: 0 },
            $push: {
                timeline: {
                    title: `New documents have been added, this has been disabled`,
                    date_time: new Date(),
                    document_no: document_no || '',
                    expiry_date: expiry_date || '',
                    created_by: { name: uploaderName }
                }
            }
        }
    );

-----------------------------
    await vehicleDocument.findByIdAndUpdate(
        doc_id,
        { $pull: { doc_file: file_path } },
        { new: true }
    );

-----------------------------
    await UsercompanyModel.find({ user_id, is_deleted: 0, active: 1 })
        .select('-_id company_id user_type role_id company_user_name allow_all_branch')
        .populate({ path: "company_id", select: "company" })
        .populate({ path: "role_id", select: "role_name" })
        .lean().exec();
-----------------------------
              const usercompanylist = await UsercompanyModel.aggregate([
    {
        $match: {
            user_id: new mongoose.Types.ObjectId(user_id),
            company_id: new mongoose.Types.ObjectId(company_id),
            "account_list.category_id": category_id,
            "account_list.sub_category_id": sub_category_id
        }
    },
    {
        $project: {
            _id: -1,
            account_list: {
                $filter: {
                    input: "$account_list",
                    as: "item",
                    cond: {
                        $and: [
                            { $eq: ["$$item.category_id", category_id] },
                            { $eq: ["$$item.sub_category_id", sub_category_id] }
                        ]
                    }
                }
            }
        }
    }
]);
-----------------------------
               const usercompanylist = await UsercompanyModel.aggregate([
    {
        $match: {
            user_id: new mongoose.Types.ObjectId(user_id),
            company_id: new mongoose.Types.ObjectId(company_id)
        }
    },
    {
        $project: {
            _id: 0,
            allow_all_account: 1,
            account_list: 1
        }
    }
]);
-----------------------------
                const usercompanylist = await UsercompanyModel.aggregate([
    {
        $match: {
            user_id: new mongoose.Types.ObjectId(user_id),
            company_id: new mongoose.Types.ObjectId(company_id),
        },
    },
    {
        $project: {
            _id: 0,
            allow_all_account: 1,
            account_list: 1,
        },
    },
]);
-----------------------------
                 const lrDocuments = await LRModel.find({
    _id: { $in: allLrIds },
    consignor_id: { $ne: null }
}).select('consignor_id').lean();

-----------------------------
    await VehicleModel.updateOne(
        { _id: vehicle_id, driver_id: null },
        { $set: { driver_id } }
    );
-----------------------------
    LRModel.updateMany(
        { _id: { $in: allLrIds } },
        { $set: update_lr_status }
    ).exec(),
    -----------------------------
        await TripModel.updateOne(
            { _id: trip_id },
            {
                $set: {
                    'freight_summary.freight_type': freight_type,
                    'freight_summary.qty': qty,
                    'freight_summary.rate': rate,
                    'freight_summary.tds_deduction': tds_diduction ? tds_diduction : 0,
                    'freight_summary.total_tds': parseFloat(tds_amount).toFixed(2),
                    'freight_summary.total_freight': parseFloat(total_freight).toFixed(2),
                    'freight_summary.balance': parseFloat(balance).toFixed(2)
                }
            }
        );
-------------------
    TripModel.find(query)
        .select("branch_id vehicle_id lorry_type_id vehicle_type_id supplier_id driver_id trip_number trip_status route_name from_location to_location dispatch_date end_date vehicle_ownership")
        .sort({ _id: -1 })
        .populate([
            { path: "branch_id", select: "branch" },
            { path: "vehicle_id", select: "vehicle_no vehicle_ownership" },
            { path: "lorry_type_id", select: "lorry_type" },
            { path: "vehicle_type_id", select: "name" },
            { path: "supplier_id", select: "name" },
            { path: "driver_id", select: "name" },
            {
                path: "lr_list",
                select: "consignor_id from_location from_state to_location to_state branch_id lr_number invoice_number lr_status eway_bill_date eway_expiry_date eway_bill_number eway_bill_status invoice_date dispatch_date",
                populate: [
                    { path: "consignor_id", select: "name" },
                    { path: "branch_id", select: "branch" },
                    { path: "unit_id", select: "name code" },
                    { path: "consignee_id", select: "name code" }
                ]
            }
        ])
        .limit(limit)
        .skip(limit * offset - limit)
        .lean()
----------------------------
    TripModel.find(query)
        .select("branch_id dispatch_date lorry_type_id vehicle_type_id vehicle_id supplier_id driver_id trip_number trip_status from_location to_location")
        .sort({ _id: -1 })
        .populate({ path: "branch_id", select: "branch" })
        .populate({ path: "lorry_type_id", select: 'lorry_type' })
        .populate({ path: "vehicle_type_id", select: "name" })
        .populate({ path: "vehicle_id", select: "vehicle_no vehicle_ownership" })
        .populate({ path: "supplier_id", select: "name" })
        .populate({ path: "driver_id", select: "name" })
        .limit(limit)
        .skip(limit * offset - limit)
        .lean().exec();
--------------------------
    const transactions = await VoucherModel.find({
    company: company_id,
    trip: trip_id,
    is_deleted: { $ne: 1 },
    lr: { $in: lr_ids }
})
    .sort({ _id: -1 })
    .populate({
        path: 'trip',
        select: 'trip_number route_name supplier_id driver_id',
        populate: { path: 'supplier_id', select: 'name' },
        populate: { path: "driver_id", select: "name" }
    })
    .lean().exec();
--------------------------
    await TripModel.updateOne(
        { _id: trip_id },
        {
            $set: update_freight_summary,
            $inc: {
                fuel_out: parseFloat(fuel_out).toFixed(2),
                total_fuel_amount: parseFloat(final_fuel_amount).toFixed(2)
            }
        }
    );
----------------------------
    await LRModel.updateMany(
        { trip_id, lr_status: { $ne: 6 } },
        [
            {
                $set: {
                    lr_status: 5,
                    eway_bill_status: 3,
                    eway_timeline: {
                        $cond: [
                            {
                                $and: [
                                    { $ne: ["$eway_bill_number", null] },
                                    { $ne: ["$eway_bill_number", ""] }
                                ]
                            },
                            {
                                $concatArrays: [
                                    { $ifNull: ["$eway_timeline", []] },
                                    [{
                                        title: "Eway Bill Delivered",
                                        date_time: end_date,
                                        created_by: { name: userdata?.full_name },
                                        bill_number: "$eway_bill_number",
                                        bill_date: "$eway_bill_date",
                                        expiry_date: "$eway_expiry_date"
                                    }]
                                ]
                            },
                            "$eway_timeline"
                        ]
                    }
                }
            }
        ]
    );