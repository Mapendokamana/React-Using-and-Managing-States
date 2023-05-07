async function createContact(contactInfoObj, setResult) {
    console.log(contactInfoObj)
    setResult('created successfully');
}

function MyButton({ onClick, children }) {
    return <>
        <button className="btn btn-primary" onClick={onClick}>
            {children}
        </button>
    </>;
}

function MyInput({ inputValue, inputLabel, inputType, setValue, readonly=false }) {
    return <>
        <div className="col">
            <label className="form-label">{inputLabel}</label>
            <input type={inputType} className="form-control"
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
                readOnly={readonly} />
        </div>
    </>;
}


function CreateEmployee() {
    // Creates a numbersObj state object and initializes it with two properties(number1, number2). 
    // setNumbersObj is a method we can use to change the current state value
    const [contactInfoObj, setContactInfoObj] = React.useState({
        id: 0,
        fName: '',
        lName: '',
        position: '',
        email: '',
        phone: 0,
        department: '',
        officeAddress: {
            address: '',
            link: ''
        },
        image: ''
    });
    const [result, setResult] = React.useState('');

    return <>
        <MyInput inputValue={contactInfoObj.fName}
            inputLabel="First Name"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, fName: value
                })}
        />
        <MyInput inputValue={contactInfoObj.lName}
            inputLabel="Middle Name(If Applicable)"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, lName: value
                })}
        />
        <MyInput inputValue={contactInfoObj.lName}
            inputLabel="Last Name"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, lName: value
                })}
        />
        <MyInput inputValue={contactInfoObj.image}
            inputLabel="Photo"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, image: value
                })}
        />
        <MyInput inputValue={contactInfoObj.position}
            inputLabel="Position"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, position: value
                })}
        />
        <MyInput inputValue={contactInfoObj.email}
            inputLabel="Employee Email"
            inputType='email'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, email: value
                })}
        />
        <MyInput inputValue={contactInfoObj.department}
            inputLabel="Department"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, department: value
                })}
        />
        <MyInput inputValue={contactInfoObj.phone}
            inputLabel="Employee Phone"
            inputType='number'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, phone: value
                })}
        />
        <MyInput inputValue={contactInfoObj.officeAddress.address}
            inputLabel="Office Address"
            inputType='text'
            setValue={
                (value) => setContactInfoObj({
                    ...contactInfoObj, officeAddress: {...contactInfoObj.officeAddress, address: value}
                })}
        />
        
        <MyButton onClick={() => createContact(contactInfoObj, setResult)}>Create</MyButton>
        <MyInput inputValue={result} readonly={true} />
    </>;
}

const container = document.getElementById('root'); // Access the root element
const root = ReactDOM.createRoot(container); // Create the React object
root.render(<CreateEmployee />); // Render the React component 
