



var products = [];
var pID = 1;
var Add = document.getElementById("addProd");
var divAddProduct =  document.getElementById("list")
Add.style.cursor = "pointer";
alert("test")

Add.addEventListener(
    "click",
    function(event){AddProduct()}
)
function insertBlankLine(targetElement)
{
	var br = document.createElement("br");
    targetElement.appendChild(br);
}
function AddToList()
{
    var dataObject = new Object();
    dataObject.identity = pID 
    dataObject.name = document.getElementById("objname").value
    dataObject.desc = document.getElementById("objdesc").value
    dataObject.price = document.getElementById("objprice").value
    dataObject.qty = document.getElementById("objqty").value
    products.push(dataObject)
    hides(divAddProduct)
    unhides(Add)
    alert("adding...")
    RemoveAll(divAddProduct)
    pID++
    
}
function hides(identity)
{
    identity.style.visibility = "hidden"
}
function unhides(identity)
{
    identity.style.visibility = "visible"
}


function RemoveAll(identity)    
{
    var child = identity.childNodes
    while(child.length>0)
    {
        identity.removeChild(child[0])
    }
}


function AddProduct()
{
    hides(Add)
    unhides(divAddProduct)
    var ObjName = document.createElement("input");
    ObjName.type = "text"
	ObjName.id = "objname"
    ObjName.placeholder = "Product name"	
	ObjName.style.width = "250px"
    divAddProduct.appendChild(ObjName);	
    
    insertBlankLine(divAddProduct);
    insertBlankLine(divAddProduct);

    var objDesc = document.createElement("textarea");
    objDesc.type = "text"
    objDesc.id = "objdesc"
    objDesc.placeholder = "insert description of the product."
    objDesc.style.width = "250px"
    objDesc.style.height = "100"
    divAddProduct.appendChild(objDesc);

    insertBlankLine(divAddProduct);
    insertBlankLine(divAddProduct);
    
    var objPrice = document.createElement("input")
    objPrice.type = "text"
    objPrice.id = "objprice"
    objPrice.placeholder = "Enter the price of the item."
    objPrice.style.width = "250px"
    divAddProduct.appendChild(objPrice)

    insertBlankLine(divAddProduct);
    insertBlankLine(divAddProduct);
    
    var objQty = document.createElement("input")
    objQty.type = "text"
    objQty.id = "objqty"
    objQty.placeholder = "Enter the quantity of the item."
    objQty.style.width = "250px"
    divAddProduct.appendChild(objQty)

    insertBlankLine(divAddProduct);
    insertBlankLine(divAddProduct);
    
    var addBtn= document.createElement("button")
    addBtn.innerHTML = "Add"
    addBtn.id = "addbtn"

    divAddProduct.appendChild(addBtn)
 
    
    addBtn.addEventListener("click",
        function(event){AddToList()}
    )

}
