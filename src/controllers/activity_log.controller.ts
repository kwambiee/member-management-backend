import {Request, Response} from "express";
import {createActivityLog, getActivityLogs, getActivityLogById, updateActivityLog, deleteActivityLog} from "../services/activity_log.service";

type ActivityLogType = {
    action: string;
    description: string;
    memberId: number;
    userId: string;
}

export const createActivityLogController = async (req: Request, res: Response) => {
    try {
        const activityLog = await createActivityLog(req.body as ActivityLogType);
        res.status(201).json(activityLog);
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
}

export const getActivityLogsController = async (req: Request, res: Response) => {
    try {
        const activityLogs = await getActivityLogs();
        res.status(200).json(activityLogs);
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
}

export const getActivityLogByIdController = async (req: Request, res: Response) => {
    try {
        const activityLog = await getActivityLogById(req.params.id);
        res.status(200).json(activityLog);
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
}

export const updateActivityLogController = async (req: Request, res: Response) => {
    try {
        const activityLog = await updateActivityLog(req.params.id, req.body as ActivityLogType);
        res.status(200).json(activityLog);
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
}

export const deleteActivityLogController = async (req: Request, res: Response) => {
    try {
        const activityLog = await deleteActivityLog(req.params.id);
        res.status(200).json(activityLog);
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
}