import "./BattleComponent.scss";

const BattleComponent = () => {
  return (
    <>
      <>
        <div className="battle">
          <div className="battle__task">
            <div className="battle__task__title">
              Choose the correct translation
            </div>
            <div className="battle__task__time">9 seconds left</div>
            <div className="battle__task__word">apple</div>
            <div className="battle__task__options">
              <p>meow</p>
              <p>meow</p> <p>meow</p>
              <p>meow</p>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default BattleComponent;
