## Pokedex React App 개발 Readme

### 프로젝트 개요
[링크](https://pokemon-git-main-meem3443s-projects.vercel.app)

본 프로젝트는 React를 사용하여 간단한 포켓몬 도감을 구현하는 웹 애플리케이션입니다.<p> 사용자는 포켓몬 목록을 확인하고, 마음에 드는 포켓몬을 선택하여 자신의 포켓몬 목록에 추가하고 삭제할 수 있습니다. <p>선택한 포켓몬의 상세 정보를 모달 창을 통해 확인할 수 있으며, 같은 포켓몬을 중복해서 선택하는 것을 방지합니다.

### 사용화면
<img src="https://github.com/user-attachments/assets/06022652-c5e4-4244-91d2-4d2da2cc88e9" width="400" alt="0 -홈페이지">
<img src="https://github.com/user-attachments/assets/3023f314-2b8f-4836-88b2-da69d062b46d" width="400" alt="1 -포켓몬-선택">
<img src="https://github.com/user-attachments/assets/31c84b3e-cd1c-499b-b793-3f633999bf40" width="400" alt="2 -포켓몬-삭제">
<img src="https://github.com/user-attachments/assets/7295fba6-8dae-4dd5-8abb-5e5c277fcbf2" width="400" alt="3  선택 핸들링">
<img src="https://github.com/user-attachments/assets/5568cbf7-9844-43cc-8361-0d68866f6223" width="400" alt="4 -모달창">


### 사용 언어 및 기술
| 언어/기술             | 이미지                                                                                                                             | 설명                                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **JavaScript**        | <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="32" height="32">                         | 웹 페이지의 동적인 기능을 구현하는 데 사용되는 주요 프로그래밍 언어입니다.                                                                              |
| **React**             | <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="32" height="32">                              | 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다. 컴포넌트 기반 아키텍처를 통해 재사용 가능한 UI 요소를 만들고 효율적으로 관리합니다.      |
| **JSX**               | <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="32" height="32">                              | JavaScript 내에서 HTML과 유사한 문법을 사용하여 UI 구조를 선언적으로 작성하는 데 사용됩니다.                                                            |
| **Styled Components** | <img src="https://styled-components.com/atom.png" width="32" height="32">                                                          | CSS-in-JS 라이브러리로, JavaScript 파일 내에서 컴포넌트 스타일을 정의하고 관리하여 스타일 충돌을 방지하고 컴포넌트와 스타일을 더욱 밀접하게 연결합니다. |
| **React Router DOM**  | <img src="https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Lockup/Dark.svg" width="32" height="32"> | 싱글 페이지 애플리케이션(SPA)에서 클라이언트 측 라우팅을 구현하는 데 사용됩니다. (`src/App.js`에서 사용)                                                |
| **Context API**       | <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="32" height="32">                              | React의 내장 상태 관리 기능으로, 전역적으로 상태를 공유하고 Prop Drilling 문제를 해결하는 데 사용됩니다. (`src/context/pokemonContext.js`)              |

### 주요 기능

1.  **포켓몬 목록 표시:** `PokemonList` 컴포넌트를 통해 API 또는 Mock 데이터를 기반으로 포켓몬 목록을 표시합니다. 각 포켓몬의 이미지, 이름, 번호, 타입 등의 기본 정보를 보여줍니다. (`src/components/PokemonList.jsx`)
2.  **포켓몬 선택 및 목록 추가:** 각 포켓몬 카드에서 "선택" 버튼을 클릭하면 해당 포켓몬이 사용자의 선택 목록(`SelectedPokemonList`)에 추가됩니다. 최대 6마리까지 선택 가능하며, 같은 포켓몬을 중복해서 선택하는 것은 방지됩니다. (`src/components/PokemonCard.jsx`, `src/pages/PokedexPage.jsx`)
3.  **선택된 포켓몬 목록 표시:** `SelectedPokemonList` 컴포넌트를 통해 사용자가 선택한 포켓몬 목록을 가로 스크롤 형태로 표시합니다. 각 선택된 포켓몬의 이미지, 이름, 번호, 타입 정보를 간략하게 보여주며, 삭제 버튼을 제공합니다. 초기 상태에는 포켓볼 이미지만 표시됩니다. (`src/components/SelectedPokemonList.jsx`)
4.  **포켓몬 삭제:** `SelectedPokemonList`의 각 포켓몬 아이템에 있는 "삭제" 버튼을 클릭하면 해당 포켓몬이 선택 목록에서 제거되고, 해당 슬롯은 다시 포켓볼 이미지로 돌아갑니다. (`src/components/SelectedPokemonList.jsx`, `src/context/pokemonContext.js`)
5.  **포켓몬 상세 정보 모달:** 포켓몬 카드 자체를 클릭하면 해당 포켓몬의 상세 정보를 담은 모달 창(`PokemonModal`)이 화면 중앙에 나타납니다. 모달 창에서는 이미지, 이름, 번호, 타입, 설명 등의 자세한 정보를 확인할 수 있으며, "닫기" 버튼을 통해 모달 창을 닫을 수 있습니다. (`src/components/PokemonCard.jsx`, `src/components/PokemonModal.jsx`, `src/context/pokemonContext.js`)
6.  **중앙 정렬:** 선택된 포켓몬 목록(`SelectedPokemonList`)의 아이템들이 중앙으로 정렬되어 보기 편하게 배치됩니다. (`src/components/SelectedPokemonList.jsx`)
7.  **Prop Drilling 해결:** Context API를 적용하여 컴포넌트 간에 props를 여러 단계 거쳐 전달하는 Prop Drilling 문제를 해결하고, 상태를 전역적으로 관리합니다. (`src/context/pokemonContext.js`, 관련 컴포넌트에서 `useContext` 사용)

### 트러블슈팅

1.  **포켓몬 이미지가 보이지 않는 경우:**

    - **코드 확인 (`src/components/SelectedPokemonList.jsx`, `src/components/PokemonCard.jsx`):**
      ```javascript
      import pokeballImage from "../../src/assets/pokeball.png"; // 경로 확인
      <Img src={pokemon ? pokemon.img_url : pokeballImage} alt={pokemon ? pokemon.korean_name : "빈 슬롯"} />
      <Img src={imageUrl} alt={name} />
      ```
      이미지 파일 경로가 올바른지 (`../../src/assets/pokeball.png`) 확인하고, `img_url` prop이 올바른 이미지 주소를 담고 있는지 Mock 데이터 (`src/assets/mock.js`)를 확인합니다.

2.  **포켓몬 선택 시 "No."만 보이는 경우:**

    - **코드 확인 (`src/pages/PokedexPage.jsx`, `src/components/SelectedPokemonList.jsx`):**

      ```javascript
      // src/pages/PokedexPage.jsx (handlePokemonSelect 함수)
      const updatedPokemons = [...selectedPokemons];
      updatedPokemons[firstEmptySlotIndex] = pokemon; // 포켓몬 객체 전체 저장 확인
      setSelectedPokemons(updatedPokemons);

      // src/components/SelectedPokemonList.jsx (렌더링 부분)
      <Name>{pokemon?.korean_name}</Name>
      <Number>No. {pokemon?.id}</Number>
      ```

      `handlePokemonSelect` 함수에서 포켓몬 객체 전체를 상태에 저장하는지 확인하고, `SelectedPokemonList`에서 옵셔널 체이닝 (`?.`)을 사용하여 객체 속성에 안전하게 접근하고 있는지 확인합니다. Mock 데이터에 `korean_name`, `id` 속성이 있는지 확인합니다.

3.  **삭제 버튼이 작동하지 않는 경우:**

    - **코드 확인 (`src/components/SelectedPokemonList.jsx`, `src/context/pokemonContext.js`):**

      ```javascript
      // src/components/SelectedPokemonList.jsx
      <DeleteButton onClick={() => handleDeletePokemon(index)}>
        삭제
      </DeleteButton>;

      // src/context/pokemonContext.js (handleDeletePokemon 함수)
      const updatedPokemons = [...selectedPokemons];
      updatedPokemons[index] = null;
      setSelectedPokemons(updatedPokemons);
      ```

      `onClick` 이벤트 핸들러가 `handleDeletePokemon` 함수와 올바르게 연결되어 있는지, 그리고 해당 함수가 상태를 올바르게 업데이트하는지 확인합니다.

4.  **같은 포켓몬을 중복해서 선택할 수 있는 경우:**

    - **코드 확인 (`src/pages/PokedexPage.jsx` 또는 `src/context/pokemonContext.js`의 `handlePokemonSelect` 함수):**

      ```javascript
      const isAlreadySelected = selectedPokemons.some(
        (selected) => selected && selected.id === pokemon.id
      );

      if (isAlreadySelected) {
        alert(`${pokemon.korean_name}은 이미 선택되었습니다.`);
        return;
      }
      ```

      이미 선택된 포켓몬인지 확인하는 로직이 구현되어 있고, 중복 선택 시 함수가 `return` 되는지 확인합니다.

5.  **선택된 포켓몬 목록이 왼쪽으로 쏠려 있는 경우:**

    - **코드 확인 (`src/components/SelectedPokemonList.jsx`):**
      ```javascript
      const ListContainer = styled.div`
        // ... other styles
        justify-content: center; /* 중앙 정렬 속성 확인 */
      `;
      ```
      `ListContainer` 스타일 정의에 `justify-content: center;` 속성이 있는지 확인합니다.

6.  **포켓몬 카드 클릭 시 모달이 아닌 선택 기능이 작동하는 경우 (또는 그 반대):**

    - **코드 확인 (`src/components/PokemonCard.jsx`):**

      ```javascript
      const handleAddButtonClick = (event) => {
        event.stopPropagation(); // 이벤트 전파 방지
        // ... 선택 로직
      };

      <Card onClick={handleCardClick}>
        {" "}
        {/* 카드 클릭 시 모달 */}
        {/* ... */}
        <AddButton onClick={handleAddButtonClick}>선택</AddButton> {/* 버튼 클릭 시 선택 */}
      </Card>;
      ```

      "선택" 버튼의 `onClick` 핸들러에서 `event.stopPropagation()`을 호출하여 카드 클릭 이벤트로 전파되는 것을 막고 있는지 확인합니다.

7.  **`Uncaught ReferenceError: ... is not defined` 오류 발생 시:**

    - 오류 메시지에 언급된 컴포넌트 (`PokemonItem`, `ModalOverlay` 등)가 해당 파일 (`src/components/SelectedPokemonList.jsx`, `src/components/PokemonModal.jsx` 등) 내에서 `styled.div\`` 등을 사용하여 정의되었는지 확인합니다.
    - 컴포넌트 이름에 오타가 없는지 확인합니다.
    - 필요한 경우, 다른 파일에서 정의된 컴포넌트를 `import` 했는지 확인합니다.
