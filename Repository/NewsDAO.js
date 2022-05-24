const { SERVER_ERROR } = require('../Helpers/Responses');
const NewsModel = require('../Models/News.Schema');

const CreateNews = async (DATA) => {
  try {

    const { newsTitle, newsArticle, newsImages, } = DATA;

    const NewNews = await new NewsModel({
      newsTitle,
      newsArticle,
      newsImages,
    });

    const SavedNews = await NewNews.save();
    return SavedNews;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const GetAllNews = async () => {
  try {

    const News = await NewsModel.find();
    return News;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const GetNews = async (id) => {
  try {

    const News = await NewsModel.findOne({ _id: id });
    return News;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const UpdateNews = async (data) => {
  try {

    const { id, newsTitle, newsArticle } = data;
    const UpdatedNews = await NewsModel.findOneAndUpdate({ _id: id }, {
      $set: {
        newsTitle,
        newsArticle,
      }
    }, {
      new: true,
    });

    return UpdatedNews;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const DeleteNews = async (id) => {
  try {

    const DeletedNews = await NewsModel.findOneAndDelete({ _id: id });
    return DeletedNews;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = {
  CreateNews,
  GetAllNews,
  GetNews,
  UpdateNews,
  DeleteNews,
};