const form=document.querySelector('form');
const allTask=document.querySelector('#allTask');
const input=document.querySelector('input');

form.addEventListener('submit',(e)=>
{
    e.preventDefault();

    const text=input.value.trim();
    if(text=="")
        return;

    const parent=document.createElement('div');
    parent.style.marginTop='20px';

    const task=document.createElement('span');
    task.textContent=text;
    task.style.marginRight="20px";

    const deleteButton=document.createElement('button');
    deleteButton.textContent="Delete";
    deleteButton.style.width="50px";

    const doneButton=document.createElement('button');
    doneButton.textContent="Done";
    deleteButton.style.width="50px";
    doneButton.style.marginRight="20px";

    parent.append(task,doneButton,deleteButton);
    allTask.append(parent);

    deleteButton.addEventListener('click',()=>
    {
        parent.remove();
    })

    doneButton.addEventListener('click',()=>
    {
        task.style.textDecoration='through-line';
        task.style.color='grey';
    })
    form.reset();
    })