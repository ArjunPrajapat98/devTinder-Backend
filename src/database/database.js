import mongoose from 'mongoose'

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://arjunurja360_db_user:7lq26CADlxPLHf7p@geecomcluster.gk0n53s.mongodb.net/GeecomCluster')
}

// username = arjunurja360_db_user
// password = 7lq26CADlxPLHf7p
// mongodb+srv://arjunurja360_db_user:7lq26CADlxPLHf7p@geecomcluster.gk0n53s.mongodb.net/?appName=GeecomCluster