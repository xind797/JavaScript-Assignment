function displayDogNames() {
    let dogNames = [];
    for (let i = 1; i <= 6; i++) {
        let name = prompt(`Enter the name of dog ${i}:`);
        dogNames.push(name);
    }

    // 这行代码需要在函数内部
    dogNames.sort().reverse();

    let dogList = document.getElementById("dogList");

    // 将排序后的名字插入到 <ul> 中
    dogList.innerHTML = dogNames.map(name => `<li>${name}</li>`).join("");
}

// 调用函数
displayDogNames();
