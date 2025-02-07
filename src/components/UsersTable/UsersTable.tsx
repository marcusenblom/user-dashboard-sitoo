import { ReactNode, useState } from "react";
import { User } from "../../types/user";
import styles from "./UsersTable.module.scss";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import CustomCheckbox from "../Utils/Inputs/CustomCheckbox/CustomCheckbox";
import cn from 'classnames';
import { getFormattedDateAndYear } from "../../utils/helperFunctions";
import AddNewUser from "./AddNewUser/AddNewUser";
import PopupModal from "../PopupModal/PopupModal";
import DeleteUser from "./DeleteUser/DeleteUser";

type UserTableProps = {
    users: User[];
    children: ReactNode;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
}

export default function UsersTable({ users, refetch, children }: UserTableProps) {
    const [selectedUser, setSelectedUser] = useState<string>("");
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [addingNewUser, setAddingNewUser] = useState<boolean>(false);

    function toggleUser(id: string) {
        setSelectedUser(id);
    }
    
    return (
        <>
        <div className={styles.wrapper}>

            <div className={styles.nav}>
                <div className={styles.navInner}>
                    <button type="button" className={cn(styles.button, styles.delete)} disabled={!selectedUser} onClick={()=>{setConfirmDelete(true)}}>Delete selected</button>
                    <button type="button" className={cn(styles.button, styles.add)} onClick={()=>{setAddingNewUser(true)}}>Add user +</button>
                </div>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date Created</th>
                            <th>Date Modified</th>
                            <th>ID</th>

                        </tr>
                    </thead>
                    {users?.length > 0 &&

                    <tbody>
                        {
                            users.map((user) => {
                                const createdAtData = getFormattedDateAndYear(user.datecreated);
                                const modifiedAtData = getFormattedDateAndYear(user.datemodified);

                                return (
                                <tr key={user.userid}>
                                    <td>
                                        <CustomCheckbox
                                            id={user.userid}
                                            checked={selectedUser == user.userid}
                                            onChange={toggleUser}
                                        />
                                    </td>
                                    <td className={styles.bold}>{user.namefirst || "-"} {user.namelast || "-"}</td>
                                    <td>{user.email || "-"}</td>
                                    <td>
                                        {createdAtData[0]} <span className={styles.opacity}>
                                            {`(${createdAtData[1]})`}
                                        </span>
                                    </td>
                                    <td>
                                        {modifiedAtData[0]} <span className={styles.opacity}>
                                            {`(${modifiedAtData[1]})`}
                                        </span>
                                    </td>
                                    <td className={styles.small}>{user.userid}</td>
                                </tr>
                            )})
                        }

                    </tbody>
                    }
                </table>

                {children}
            </div>
        </div>

        {confirmDelete &&
            <DeleteUser id={selectedUser} user={users?.find(u => u?.userid == selectedUser)} refetch={refetch} close={()=>{setConfirmDelete(false)}}/>
        }

        {addingNewUser &&
            <AddNewUser refetch={refetch} close={()=>{setAddingNewUser(false)}}/>
        }
        </>
    );
}