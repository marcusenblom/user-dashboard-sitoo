import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import PopupModal from '../../PopupModal/PopupModal';
import styles from './AddNewUser.module.scss';
import { useState, FormEvent } from 'react';
import CustomTextInput from '../../Utils/Inputs/CustomTextInput/CustomTextInput';
import { emailRegex } from '../../../utils/regex';
import { useSnackbar } from '../../../context/SnackbarProvider';
import Spinner from '../../Utils/Loaders/Spinner/Spinner';
import createNewUser from '../../../api/createNewUser';

type AddNewUserProps = {
    close: () => void;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
}

export default function AddNewUser({ refetch, close }: AddNewUserProps) {
    const { showSnackbar } = useSnackbar();
    const [addingUser, setAddingUser] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    function handleChange(name: string, value: string){
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    async function addUser(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        let validEmail = formData?.email?.match(emailRegex) != null;

        if(!validEmail){
            showSnackbar({
                status: "error",
                text: "The email adress is not correctly formatted",
                duration: 4000
            });

            return;
        }

        setAddingUser(true);

        const res = await createNewUser({
            firstName: formData?.firstName,
            lastName: formData?.lastName,
            email: formData?.email,
        });

        console.log(res)

        setAddingUser(false);

        if(res?.statuscode == 200){
            showSnackbar({
                status: "success",
                text: "The user has been created!",
                duration: 4000
            });

            refetch();
            close();
        } else {
            showSnackbar({
                status: "error",
                text: res?.error || "An error occurred when creating the user",
                duration: 4000
            });
        }
        
    }

    return (
        <PopupModal show={true} close={close} maxWidth={"540px"} header='Add new user'>
            <div className={styles.inner}>

                <form className={styles.form} onSubmit={addUser}>
                    <div className={styles.inputWrapper}>
                        <CustomTextInput
                            inputLabel="First name"
                            type="text"
                            value={formData?.firstName}
                            placeholder="First name"
                            name="firstName"
                            handleChange={handleChange}
                        />
                    </div>

                    <div className={styles.inputWrapper}>
                        <CustomTextInput
                            inputLabel="Last name"
                            type="text"
                            value={formData?.lastName}
                            placeholder="Last name"
                            name="lastName"
                            handleChange={handleChange}
                        />
                    </div>

                    <div className={styles.inputWrapper}>
                        <CustomTextInput
                            inputLabel="Email"
                            type="text"
                            value={formData?.email}
                            placeholder="Email"
                            name="email"
                            handleChange={handleChange}
                        />
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.mainButton} type="submit" disabled={addingUser || !formData?.firstName || !formData?.lastName || !formData?.email}>
                            {addingUser ? "Adding user" : "Add new user"}
                            {addingUser &&
                                <div className={styles.loader}>
                                    <Spinner show={true} white={true} thin={true}/>
                                </div>
                            }
                        </button>
                    </div>
                </form>
            </div>
        </PopupModal>
    )
}
