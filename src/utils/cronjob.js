import cron from 'node-cron';
import { ConnectionModal } from '../modals/connections.js';
import { endOfDay, startOfDay, subDays } from 'date-fns'



// send emails to all people who got requests the previous day

cron.schedule("45 53 14 * * *", async (req, res, next) => {
    try {
        const today = subDays(new Date(), 0);
        const startDay = startOfDay(today);
        const endDay = endOfDay(today);

        const pendingPeople = await ConnectionModal.find({
            status: 'Interested',
            createdAt: {
                $gte: startDay,
                $lt: endDay
            }
        }).populate('fromUserId toUserId')

        const listOfEmail = [...new Set(pendingPeople?.map((element) => element?.toUserId?.email))]

        for (let email of listOfEmail) {
            try {
                console.log('email', email)
                // send email one by one
            } catch (error) {
                next(error)
            }
        }

    } catch (error) {
        next(error)
    }
})