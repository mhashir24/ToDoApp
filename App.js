import moment from 'moment';
import React, {useState} from 'react';
import {TouchableOpacity, Text, View, TextInput, FlatList} from 'react-native';

// const user = {
//   name: 'nabeel',
//   contact: '1233',
//   age: 12,
// };

// const abc = 'asdasd';

// const arr = ['abnbn', 'asda'];

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();
  // const [userData, setUserData] = useState(user);
  // const [abcData, setAbcData] = useState(abc);
  // const [myArr, setMyArr] = useState(arr);

  const handleTodo = () => {
    // const clone = {...user};
    // clone.name = 'hashir';
    // clone.contact = '000';
    // setUserData(clone);
    // setAbcData('hashir pagal ha');

    if (text) {
      let todoClone = [...todoList];
      todoClone.push({
        title: text,
        name: name,
        date: moment().format('DD-MM-YYYY'),
        day: moment().format('ddd'),
        time: moment().format('hh:mm a'),
      });
      setTodoList(todoClone);
      setText('');
      setName('');
    }
  };

  const onEdit = index => {
    const txt = [...todoList];
    setIsEdit(true);
    setText(txt[index]);
    setEditIndex(index);
  };

  const onDelete = index => {
    let todoClone = [...todoList];
    todoClone.splice(index, 1);
    setTodoList(todoClone);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{borderWidth: 1}}>
        {/* <Text>{userData.name}</Text>
        <Text>{userData.contact}</Text>
        <Text>{userData.contact}</Text>
        <Text>{abcData}</Text> */}

        {/* <Text>{myArr[0]}</Text> */}
        {/* <Text>{myArr[1]}</Text> */}

        <TextInput
          onChangeText={setText}
          value={text}
          placeholder={'Enter First Name'}
        />

        <TextInput
          onChangeText={setName}
          value={name}
          placeholder={'Enter Last Name'}
        />
      </View>

      {isEdit ? (
        <TouchableOpacity onPress={handleEditTodo}>
          <View style={{borderWidth: 1, alignSelf: 'flex-start', padding: 10}}>
            <Text>{'Edit'}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleTodo}>
          <View style={{borderWidth: 1, alignSelf: 'flex-start', padding: 10}}>
            <Text>{'Add Todo'}</Text>
          </View>
        </TouchableOpacity>
      )}

      <FlatList
        data={todoList}
        keyExtractor={item => item}
        contentContainerStyle={{
          width: '100%',
          alignItems: 'center',
        }}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                paddingVertical: 10,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={{marginRight: 10}}>{item.title}</Text>
              <Text style={{marginRight: 10}}>{item.name}</Text>

              <Text style={{marginRight: 10}}>{item.date}</Text>
              <Text style={{marginRight: 10}}>{item.day}</Text>
              <Text style={{marginRight: 10}}>{item.time}</Text>

              <TouchableOpacity onPress={() => onEdit(index)}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    width: 60,
                    height: 30,
                  }}>
                  <Text>{'Edit'}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => onDelete(index)}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    width: 60,
                    height: 30,
                  }}>
                  <Text>{'Delete'}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default App;
