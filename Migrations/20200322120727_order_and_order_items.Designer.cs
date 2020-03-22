﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApplication.DbContext;

namespace WebApplication.Migrations
{
    [DbContext(typeof(MariaContext))]
    [Migration("20200322120727_order_and_order_items")]
    partial class order_and_order_items
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("WebApplication.Models.Order", b =>
                {
                    b.Property<string>("id")
                        .HasColumnName("id")
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.HasKey("id");

                    b.ToTable("orders");
                });

            modelBuilder.Entity("WebApplication.Models.OrderItem", b =>
                {
                    b.Property<string>("id")
                        .HasColumnName("id")
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.Property<string>("comment")
                        .HasColumnName("comment")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("items")
                        .HasColumnName("items")
                        .HasColumnType("int");

                    b.Property<float>("maximum_price_per_item")
                        .HasColumnName("max_price_per_item")
                        .HasColumnType("float");

                    b.Property<string>("order_id")
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.Property<string>("product")
                        .HasColumnName("product")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("id");

                    b.HasIndex("order_id");

                    b.ToTable("order_items");
                });

            modelBuilder.Entity("WebApplication.Models.OrderItem", b =>
                {
                    b.HasOne("WebApplication.Models.Order", "Order")
                        .WithMany()
                        .HasForeignKey("order_id");
                });
#pragma warning restore 612, 618
        }
    }
}
