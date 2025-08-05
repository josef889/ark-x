const xlxs= require('xlsx');
const bnc= require('./bonus_config.json');
//               ./employee_data_1.xlsx

//  ./employee_data_Bonus.xlsx
try{

    const inputFille=process.argv[2]; // smia dyal fille li gadi takhod mano les dones 
    const output= process.argv[3]; // smia dyal fille li gadi imchiw lih les donnes 
    const doc = xlxs.readFile(inputFille);   // read context
    const sheet= doc.Sheets[doc.SheetNames[0]];  //first sheet
    const data = xlxs.utils.sheet_to_json(sheet); 

    // console.log(data);
    for( const row of data){
        if(row.AnnualSalary<bnc.low.max){
                row.BonusPercentage= bnc.low.pourcentage;
                row.BonusAmount= Math.round(row.AnnualSalary*bnc.low.pourcentage)
        }else if(row.AnnualSalary>=bnc.medium.min && row.AnnualSalary<=bnc.medium.max){
            row.BonusPercentage= bnc.medium.pourcentage;
            row.BonusAmount= Math.round(row.AnnualSalary*bnc.medium.pourcentage)
        }else if(row.AnnualSalary>bnc.hight.min){
            row.BonusPercentage=bnc.hight.pourcentage;
            row.BonusAmount =  Math.round(row.AnnualSalary*bnc.hight.pourcentage)
        }
    }
    console.log(data)
        const newWorkShett=xlxs.utils.json_to_sheet(data);
        const newWorkBook=xlxs.utils.book_new();
        xlxs.utils.book_append_sheet(newWorkBook,newWorkShett,'Employee');
        xlxs.writeFile(newWorkBook,output);
        console.log("File saved: employee_data_with_bonus.xlsx");
    
    
}catch(error){
    console.log(error)
}