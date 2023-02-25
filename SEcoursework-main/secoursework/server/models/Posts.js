module.exports = (sequelize, Datatypes) => {

    const Posts = sequelize.define("Posts", {
        postTitle:{
            type: Datatypes.STRING,
            allowNull: false,
        },
        postText:{
            type: Datatypes.STRING,
            allowNull: false,
        },
        postUsername:{
            type: Datatypes.STRING,
            allowNull: false,
        },
    });

    Posts.associate = (models) => {
        Posts.hasMany(models.Comment, {
            onDelete: "cascade",
        });
    }

    return Posts;
};