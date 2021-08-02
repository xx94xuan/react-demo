import React, { Component } from 'react';
import scrollMonitor from 'scrollmonitor';

export default class LoadMore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blocks: props.divBlocksContent.slice(0, props.range)
    }
    this.loadMore = this.loadMore.bind(this);
    this.renderBlocks = this.renderBlocks.bind(this);
  }

  componentDidMount() {
    const _this = this;
    this.elementWatcher = scrollMonitor.create(_this.loadingRef, 500)
    this.elementWatcher.enterViewport(function() {
      _this.loadMore();
    });
  }

  loadMore() {
    let { blocks } = this.state,
      { range, divBlocksContent } = this.props,
      blocksCount = blocks.length + range,
      newContent = divBlocksContent.slice(0, blocksCount);

    if (newContent.length >= divBlocksContent.length) {
      this.elementWatcher.destroy();
    }

    this.setState({ blocks: newContent });
  }

  renderBlocks(){
    const { blocks } = this.state;

    return blocks.map(function(block){
      return <div key={`block-${block}`} className='div-block' style={{"backgroundColor":"beige","width":"100%","height":"300px","textAlign":"center","margin":"20px"}}>{block}</div>
    })
  }

  render(){
    return (
      <div className="divBlocksContent-container">
        {
          this.renderBlocks()
        }
        <div ref={(loadingRef) => (this.loadingRef = loadingRef)} style={{'height': '1px', 'backgroundColor': 'red'}}></div>
      </div>
    );
  }
}

LoadMore.defaultProps = {
  range: 4,
};
