declare const ADD_JOBAPPLICATION = "ADD_JOBAPPLICATION";
declare const DELETE_JOBAPPLICATION = "DELETE_JOBAPPLICATION";
declare const FETCH_JOBAPPLICATIONS = "FETCH_JOBAPPLICATIONS";
declare const JOBAPPLICATION_FETCH_SUCCESS = "JOBAPPLICATION_FETCH_SUCCESS";
declare const JOBAPPLICATION_FETCH = "JOBAPPLICATION_FETCH";

interface JobApplication {
  id?: uuid | undefined;
  company: string;
  role: string;
  status: string;
  userId: string;
}

interface User {
  phone: string;
  password: string;
  name: string;
  email: string;
  gender: string;
  birthDate: string;
}

interface Login {
  phone: string;
  password: string;
}

interface JobApplicationProps {
  job: JobApplication;
}

interface JobApplicationState {
  jobs: JobApplication[];
  loading?: boolean;
  userLoading?: boolean;
  userLogged?: boolean;
}

interface AddJobApplicationAction {
  type: typeof ADD_JOBAPPLICATION;
  payload: JobApplication;
}

interface JobApplicationFetchAction {
  type: typeof JOBAPPLICATION_FETCH;
}

interface JobApplicationFetchSuccessAction {
  type: typeof JOBAPPLICATION_FETCH_SUCCESS;
  payload: JobApplication[];
}

interface DeleteJobApplicationAction {
  type: typeof DELETE_JOBAPPLICATION;
  payload: number;
}

type JobApplicationActionTypes =
  | AddJobApplicationAction
  | DeleteJobApplicationAction
  | FetchJobApplicationsAction
  | JobApplicationFetchSuccessAction;
type AddJobApplication = (job: JobApplication) => void;
