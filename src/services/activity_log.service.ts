import ActivityLogs from "../models/activity_log.model";

type ActivityLogType = {
    action: string;
    description: string;
    userId: string;
}

export const createActivityLog = async (activityLogData: ActivityLogType) => {
    if (!activityLogData.action || !activityLogData.description || !activityLogData.userId) {
        throw new Error("action, description and memberId are required");
    }
    return await ActivityLogs.create(activityLogData as ActivityLogType);
}

export const getActivityLogs = async () => {
    return await ActivityLogs.findAll({
  order: [['createdAt', 'DESC']]
});
}

export const getActivityLogById = async (id: string) => {
    return await ActivityLogs.findByPk(id);
}

export const updateActivityLog = async (id: string, activityLogData: ActivityLogType) => {
    return await ActivityLogs.update(activityLogData, {
        where: {
            id
        }
    })
}

export const deleteActivityLog = async (id: string) => {
    return await ActivityLogs.destroy({
        where: {
            id
        }
    })
}