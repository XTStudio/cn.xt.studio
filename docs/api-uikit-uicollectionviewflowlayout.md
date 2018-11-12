---
author: Pony Cui
title: UICollectionViewFlowLayout
---

描述一个流式布局，具体使用方法请参阅教程。

## Extends

[UICollectionViewLayout](./api-uikit-uicollectionviewlayout.md)

## API

### Instance Fields

#### minimumLineSpacing: `number`
最小行间距。

#### minimumInteritemSpacing: `number`
最小行间距。

#### itemSize: `UISize`
每一个元素的宽高。

#### headerReferenceSize: `UISize`
章节顶部视图的大小。

#### footerReferenceSize: `UISize`
章节底部视图的大小。

#### sectionInset: `UIEdgeInsets`
章节的边界大小。

#### scrollDirection: `UICollectionViewScrollDirection`
视图的滚动方向。

### Events

#### "sizeForItem": (indexPath: `UIIndexPath`) => `UISize`
重载数据时触发，应返回具体元素视图的宽高。

#### "insetForSection": (inSection: `number`) => `UIEdgeInsets`
重载数据时触发，应返回某一章节的边界大小。

#### "minimumLineSpacing": (inSection: `number`) => `number`
重载数据时触发，应返回最小行间距。

#### "minimumInteritemSpacing": (inSection: `number`) => `number`
重载数据时触发，应返回最小列间距。

#### "referenceSizeForHeader": (inSection: `number`) => `UISize`
重载数据时触发，应返回章节头部宽高。

#### "referenceSizeForFooter": (inSection: `number`) => `UISize`
重载数据时触发，应返回章节底部宽高。