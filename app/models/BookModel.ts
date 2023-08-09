import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  author: String,
  title: String,
  id: Number,
  publicationYear: String,
  createdDate: Number,
});

const User = mongoose.models.users || mongoose.model('users', UserSchema);

export default User;
