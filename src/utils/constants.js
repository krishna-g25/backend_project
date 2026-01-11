export const UserRolesEnum = {
    ADMIN: "admin", 
PROJEXT_ADMIN: "project-admin",
MEMBER: "member"
}
export const AuthTypesEnum = Object.values(UserRolesEnum)
export const TaskStatusEnum = {
    TO_DO: "to-do",
    IN_PROGRESS: "in-progress",
    DONE: "done"
}
export const AvailableTaskStatuses = Object.values(TaskStatusEnum)