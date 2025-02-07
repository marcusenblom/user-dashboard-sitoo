import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import PopupModal from '../../PopupModal/PopupModal';
import styles from './DeleteUser.module.scss';
import { useState } from 'react';
import { useSnackbar } from '../../../context/SnackbarProvider';
import Spinner from '../../Utils/Loaders/Spinner/Spinner';
import deleteUser from '../../../api/deleteUsers';
import { User } from '../../../types/user';

type DeleteUserProps = {
    close: () => void;
    id: string;
    user: User | undefined;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
}

export default function DeleteUser({ refetch, close, id, user }: DeleteUserProps) {
    const { showSnackbar } = useSnackbar();
    const [deletingUser, setDeletingUser] = useState(false);


    async function deleteThisUser(){
        setDeletingUser(true);

        const res = await deleteUser({id});

        console.log(res)

        setDeletingUser(false);

        if(res?.success){
            showSnackbar({
                status: "success",
                text: "The user has been deleted!",
                duration: 4000
            });

            refetch();
            close();
        } else {
            showSnackbar({
                status: "error",
                text: res?.error || "An error occurred when deleting the user",
                duration: 4000
            });
        }
        
    }

    return (
        <PopupModal show={true} close={close} maxWidth={"540px"} header='Delete user'>
            <div className={styles.inner}>

                <p className={styles.disclaimer}>Are you sure you want to delete {user?.namefirst} {user?.namelast} with id {id}?</p>

                <div className={styles.buttonContainer}>
                    <button className={styles.mainButton} type="button" onClick={deleteThisUser}>
                        {deletingUser ? "Deleting user" : "Delete user"}
                        {deletingUser &&
                            <div className={styles.loader}>
                                <Spinner show={true} white={true} thin={true}/>
                            </div>
                        }
                    </button>
                </div>
            </div>
        </PopupModal>
    )
}
