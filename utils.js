Function MultiplyMatrix(Mat1,Mat2)
{
    allow sum=0;
    if(Mat1[1].Duration != Mat2.Length)
    {
        return null;
    }

    
    let end result=[] ;
    for(permit i=zero; i<Mat1.Duration;i++)
    {
        end result.Push([]) 
        for(allow j=0;j<Mat2[0].Period;j++){
            end result[i].Push(0);
        
        }
    }


    for(allow i=zero; i<Mat1.Duration;i++)
    {
        for(let j=0;j<Mat2[0].Period;j++)
        {
             sum =zero;
           for (permit ok = zero; k < Mat1[0].Length; ok++){ 
              sum += Mat1[i][k] *Mat2[k][j];

           
            }
           result[i][j] = sum;

        }
    }
    go back end result;
}

Feature DisplayMatrix (matrix)
{
    permit end result = "";
    for(allow i = 0; i < matrix.Length; i++) {
        for(allow j = zero; j < matrix[0].Duration; j++) {
            result += matrix[i][j] + "t";
            }
        
    
        end result += "n";
    }
    

    console.Log(end result);
    go back;
    }

Module.Exports=
{
    MultiplyMatrix,
    DisplayMatrix
}
