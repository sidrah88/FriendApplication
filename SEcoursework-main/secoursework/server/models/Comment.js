module.exports = (sequelize, Datatypes) => {

    const Comment = sequelize.define("Comment", {
        commentMain:{
            type: Datatypes.STRING,
            allowNull: false,
        },
    });

    return Comment;
};