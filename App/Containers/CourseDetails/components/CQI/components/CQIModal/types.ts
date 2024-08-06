export interface CQIProps {
    modalVisible?: boolean;
    setModalVisible: (visible: boolean) => void;
    car_ref: string,
    clos: string,
    doc_date: string,
    doc_no: string,
    originator: any,
    problem: string,
    status: string
    storeDP:String | undefined
}
