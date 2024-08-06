type ComplaintResponseData ={
    id: number;
    category: string;
    student_id: number;
    student: string;
    subject: string;
    status: string;
    created_when: string;
  }
  type ComplaintResponse= {
    success: boolean;
    summary: {
      currentCount: number;
      totalCount: number;
      begin: number;
      end: number;
      currentPage: number;
      totalPages: number;
    };
    data: ComplaintResponseData[];
  }
  
  type ComplaintResponseData ={
    id: number;
    category: string;
    student_id: number;
    student: string;
    subject: string;
    status: string;
    created_when: string;
  }

  type PermissionList={
    action:string,
    option_type:number
  }

  interface IStudent {
    id: number;
    reg_no: string;
    roll_no: string;
    name: string;
    father: string;
    email: string;
    program: string;
    dept: string;
    dp: string;
  }
  
  interface IComplaint {
    category: string;
    dept: string;
    status: string;
    allowChat: boolean;
    allowDelete: boolean;
    subject: string;
    detail: string;
    created_when: string;
    updated_when: string;
    attachment: string;
  }
  
  interface IChat {
    id: number;
    dp: string;
    user: string;
    dated: string;
    msg: string;
    attachment: string 
  }
  
  interface IComplaintResponse {
    success: boolean;
    complaint: IComplaint;
    chat: IChat[];
  }

  interface IGetComplaint{
    id:string
    name:string
  }