const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the Folder model
const folderSchema = new Schema({
  name: { type: String, default: "new folder" },
  parent: { type: Schema.Types.ObjectId, ref: 'Folder', default: null },
  parent_list: [{ type: Schema.Types.ObjectId, ref: 'Folder' }],
  // images: [{ type: Schema.Types.ObjectId, ref: 'Image' }],
});
module.exports = mongoose.model('Folder', folderSchema);