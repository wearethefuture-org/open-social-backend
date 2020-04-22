module.exports =  (sequelize: any, DataTypes: any) => {
    const Chats = sequelize.define(
        'chats',
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field: 'id'
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'name'
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
                field: 'description'
            },
            logoId: {
                type: DataTypes.BIGINT,
                allowNull: true,
                references: {
                    model: 'files',
                    key: 'id'
                },
                field: 'logo_id'
            },
            available: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                field: 'available'
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.fn('NOW'),
                field: 'created_at'
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'updated_at'
            }
        },
        {
            tableName: 'chats',
            timestamps: false,
            createdAt: 'created_at',
            updatedAt: true
        }
    );

    Chats.associate = (models: any) => {
      Chats.belongsTo(models.users, {foreignKey: 'ownerId'});
    };

    return Chats;
};
